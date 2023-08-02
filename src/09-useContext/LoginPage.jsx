import React, { useContext } from 'react';
import { UserContext } from './context/UserContext';

const LoginPage = () => {

    const {user, setUser} = useContext(UserContext);
    
   

    return (
        <>
            {
                JSON.stringify(user)
            }

            <button className='btn btn-primary' onClick={()=> setUser({
                id:123456,
                name:'jhoni',
                email:'jhonier@gmail.com'
            })}>
                set user
            </button>
        </>
    );
}

export default LoginPage;
