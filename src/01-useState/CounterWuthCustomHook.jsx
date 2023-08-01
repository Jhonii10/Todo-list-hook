import { useCounter } from "../hooks/useCounter";

const CounterWuthCustomHook = () => {
  
    const {counter , increment , decrement , reset} = useCounter()


    return (
        <div>
            <h1>counter with hook: {counter}</h1>
            <hr/>

            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-primary" onClick={decrement}>-1</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
             
        </div>
    );
}

export default CounterWuthCustomHook;
