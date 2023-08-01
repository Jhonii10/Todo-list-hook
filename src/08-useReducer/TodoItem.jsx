
const TodoItem = ({todo, onDelete , OnToggleTodo}) => {
    return (
        <>
        <li className='list-group-item d-flex justify-content-between'>
            <span className={`align-self-center ${ (todo.done) ? 'text-decoration-line-through':''}`}
                onClick={()=>OnToggleTodo(todo.id)}
             >{todo.description}</span>
            <button 
                className='btn btn-danger'
                onClick={()=>onDelete(todo.id)}>
               borrar
            </button>

        </li>
            
        </>
    );
}

export default TodoItem;
