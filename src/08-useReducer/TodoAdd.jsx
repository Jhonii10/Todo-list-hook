import React from 'react';
import { UseForm } from '../hooks/useForm';

const TodoAdd = ({onNewTodo}) => {
  
    const {description,onInputChange,onResetForm}=UseForm({
        description:''
    })

    const onFormSubmit = (event)=>{
        event.preventDefault();

        if (description.length <= 1) return;
        
        const newTodo = {
            id:new Date().getTime(),
            description:description,
            done:false
        }

        onNewTodo(newTodo)
        onResetForm()
    }


    return (
        <form onSubmit={onFormSubmit}>
                <input
                    type="text"
                    placeholder="descripción de tarea..."
                    className='form-control'
                    name='description'
                    value={description}
                    onChange={onInputChange}
                />

                <button type='submit'
                         className='btn btn-outline-primary'>agregar</button>
        </form>
    );
}

export default TodoAdd;
