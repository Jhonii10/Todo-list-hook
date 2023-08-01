export const todoReducer = (inicialstate = [], action={})=>{


    switch (action.type) {
        case '[TODO] Add Todo':
            return [...inicialstate , action.payload]

        case '[TODO] Remove Todo':
            return inicialstate.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return inicialstate.map(todo =>{
                if (todo.id === action.payload) {
                    return{
                        ...todo,
                        done: !todo.done
                    }

                }
                return todo
            })
    
        default:
            return inicialstate;
    }
}