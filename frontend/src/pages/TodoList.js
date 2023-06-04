import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import axios from 'axios';

function TodoList() {
  const [todos, setTodos] = useState([
    {
      id: 3,
      text: 'Shopping',
      StartTime: new Date(2023, 5, 15, 12, 30),
      EndTime: new Date(2023, 5, 12, 14, 0)
    },
    {
      id: 1,
      text: 'Go to the office',
      StartTime: new Date(2023, 5, 15, 9, 30),
      EndTime: new Date(2023, 5, 15, 4, 0)
  }, {
      id: 2,
      text: 'Meeting for new project',
      StartTime: new Date(2023, 5, 12, 12, 0),
      EndTime: new Date(2023, 5, 12, 14, 0)
    },
    
  ]);

  // React.useEffect(() => {
  //     afficher()
  // });

  // async function afficher(){
  //   const resultat = await axios.get('http://127.0.0.1:8000/api/taskes')
  //   if (resultat.data.status === 200){
      // resultat.data.taskes.map((task)=>{
      //   task.map((t)=>{
      //     console.log('titre',t.titre)
      //   })
      //   })
  //     setTodos(resultat.data.taskes)
  //     console.log('todos',todos)
  //   }
  // }

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos([todo,...todos]);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
