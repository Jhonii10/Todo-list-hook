

import { useMemo, useState } from 'react';
import { useCounter } from '../hooks/useCounter';
import Small from './Small';



const heavyStuff = (iteration = 100 )=>{

    for (let index = 0; index <= iteration; index++) {
        console.log('hay vamos ')
        
    }

    return `${iteration} iteraciones realizadas`
}



const MemoHook = () => {
   
    const {counter, increment }=useCounter(1000)
    const [show, setShow] = useState(false);

    const memorizedValue = useMemo(()=>
        heavyStuff(counter)
    ,[counter])


    return (
        <div>
            <h1>counter: <Small counter={counter}/> </h1>
            <h3>{memorizedValue}</h3>
            <hr/>
            <button className='btn btn-primary' onClick={increment}>+1</button>
            <button className='btn btn-outline-primary' onClick={()=>{setShow(!show)}} >Show/hide {JSON.stringify(show)}</button>

        </div>
    );
}

export default MemoHook;