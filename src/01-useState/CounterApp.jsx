import { useState } from "react";


const CounterApp = () => {

    const [counter, setcounter] = useState({
        counter1:1,
        counter2:2,
        counter3:3,
    });

    // desestruturacion de objeto
    const  {counter1,counter2,counter3} = counter


    const handleClik = () => {
        setcounter({
            // operador express
            ...counter,
            counter1:counter1+1,
            
        })
    }


    return (
        <>
           
            <h1>CounterApp</h1>
            <p>{ counter1 }</p>
            <p>{ counter2 }</p>
            <p>{ counter3 }</p>
            <hr/>
            <button onClick={handleClik}>+1</button>
        </>
    );
}

export default CounterApp;
