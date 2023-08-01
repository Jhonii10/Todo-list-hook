import LoadingQuote from "../02-useEffect/LoadingQuote";
import Quote from "../02-useEffect/Quote";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";


const MultipleCustomHook = () => {

    const {data , isLoading } = useFetch('https://api.breakingbadquotes.xyz/v1/quotes/100')
 
     const {counter , increment,decrement,reset } =  useCounter()
     

    return (
        <div>
            <h1>MultipleCustomHook</h1>
            <hr/>

            {
                isLoading 
                ? (<LoadingQuote/>)
                : (<Quote data={data} counter={counter}/>)
            }
            
            
            <button className="btn btn-primary" onClick={increment}>Next quote</button>
            <button className="btn btn-primary" onClick={decrement} disabled={ counter < 1 ? true: false}>back quote</button>
            <button className="btn btn-primary" onClick={reset}>reset</button>
            
        </div>
    );
}

export default MultipleCustomHook;
