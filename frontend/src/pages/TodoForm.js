import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [startat ,setStartat] = useState("")
  const [endat ,setEndat] = useState("")
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      startat : startat ,
      endat : endat ,
    });
    setInput('');
    axios.post('http://127.0.0.1:8000/api/createTask', {
      titre: input,
      startat : startat ,
      endat : endat ,
      IsAllDay : 0 ,
    })
    .then((response) => {
      console.log(response.data);
    });
  
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>
      {props.edit ? (
        <>
          <input
            placeholder='Update your item'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button onClick={handleSubmit} className='todo-button edit'>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <input type="text" 
           name="startat" 
           className='todo-input' 
           onChange={(e)=>setStartat(e.target.value)} 
           placeholder='Start at'
           /> 
          <input type="text" name="endat" 
          className='todo-input' 
          onChange={(e)=>setEndat(e.target.value)}
          placeholder='End at'
          /><br/><br/>
          <button onClick={handleSubmit} className='todo-button'>
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
