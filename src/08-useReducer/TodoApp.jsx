import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReduce';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import { UseTodos } from '../hooks/useTodos';

const TodoApp = () => {

     // useTodo
     // todos , handleDeleteTodo, handleToggleTodo,handleNewTodo
     const {todos,handleDeleteTodo,handleToggleTodo,handleNewTodo} = UseTodos()


    return (
        <div>
           <h1>Todo App {todos.length}, <small>pendientes: {0}</small></h1>
           <hr/>

           <div className='row'>
                <div className='col-7'>
                    <TodoList 
                        todos={todos}
                        onDelete={handleDeleteTodo}
                        OnToggleTodo={handleToggleTodo}
                    />
                </div>
           </div>

           <div className='col-5'>
               
              <h3>agregar todo</h3>
              <hr/>
               <TodoAdd onNewTodo={handleNewTodo}/>
              

           </div>

        
        </div>
    );
}

export default TodoApp;
