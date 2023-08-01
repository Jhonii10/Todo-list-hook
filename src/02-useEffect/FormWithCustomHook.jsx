/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import Message from "./Message";
import { UseForm } from "../hooks/useForm";




const  FormWithCustomHook = () => {
   

    const {onInputChange, formState , username , email , password, onResetForm} = UseForm({
        username: '',
        email:'',
        password:''
    })


   // const {username , email , password } = formState;

    useEffect(() => {
        console.log('name change')
    }, [username]);

    useEffect(() => {
        console.log('email change')
    }, [email]);






    return (
        <div>
            <h1>formulario simple</h1>
            <hr/>
            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-4"
                placeholder="correo@gmail.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-4"
                placeholder="contraseña"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary" onClick={onResetForm}>borrar</button>

            {
                (username === 'jhoni') && <Message/>
            }

            

        </div>
    );
}

export default FormWithCustomHook;
