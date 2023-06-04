
import React from 'react';
import './Taches.css';
import TodoList from './TodoList.js';
import Calendrier from './Calendrier';

function Taches(props) {
  return (
    <>
    
        <div className='todo-app'>
            <TodoList/>
        </div>
        <div className='calendrier'>
            <Calendrier props={props.todos}/>
        </div>
        {console.log('this' , props.todos)}
        {/* {console.log('taskes' , props.taskes)} */}

    </>

  );
}

export default Taches;
