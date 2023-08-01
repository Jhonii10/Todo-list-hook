import { useState } from "react";

export const UseForm = (initalForm = {}) => {
  
    const [formState, setFormState] = useState(initalForm);


    const onInputChange = ({target})=>{
        
        const {name , value} = target;
        setFormState({
            ...formState,
            [name]:value
        })

    }

    const onResetForm = ()=>{
        setFormState(initalForm)
    }




    return{
        onInputChange,
        ...formState,
        formState,
        onResetForm,

    }
}


