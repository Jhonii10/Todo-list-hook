import { useEffect, useState } from "react";
import Message from "./Message";


const SimpleForm = () => {
   
    const [formState, setFormState] = useState({
        username: "jhoni",
        email:"jhoni@gmail.com",
    });


    const {username , email} = formState;


    const onInputChange = ({target})=>{
        
        const {name , value} = target;
        setFormState({
            ...formState,
            [name]:value
        })

    }



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
            {
                (username === 'jhoni') && <Message/>
            }

            

        </div>
    );
}

export default SimpleForm;
