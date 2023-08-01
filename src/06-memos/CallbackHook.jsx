import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallbackHook = () => {



   const [counter, setCounter] = useState(10);

    const incrementFater = useCallback((value)=>{
          setCounter((c)=> c + value)
    },[])

    return (
        <div>
            <h1>useCallbasck:{counter}</h1>
            <hr/>
            <ShowIncrement increment={incrementFater}/>
            
        </div>
    );
}

export default CallbackHook;
