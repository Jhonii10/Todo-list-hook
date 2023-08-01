import { useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import Small from './Small';

const Memorise = () => {
   
    const {counter, increment }=useCounter()
    const [show, setShow] = useState(false);


    return (
        <div>
            <h1>counter: <Small counter={counter}/> </h1>
            <hr/>
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary' onClick={()=>{setShow(!show)}} >Show/hide {JSON.stringify(show)}</button>

        </div>
    );
}

export default Memorise;
