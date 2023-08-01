import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos , onDelete , OnToggleTodo}) => {
    return (
        <ul className='list-group'>
                {
                    todos.map((todo)=>
                        <TodoItem 
                            key={todo.id}
                            todo={todo}
                            onDelete={onDelete}
                            OnToggleTodo={OnToggleTodo}
                        />

                    )
                }
                   
                    
                </ul>
    );
}

export default TodoList;
