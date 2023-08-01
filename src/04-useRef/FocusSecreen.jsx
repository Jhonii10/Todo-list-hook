import { useRef } from "react";

const FocusSecreen = () => {


    const ref = useRef()
    console.log(ref)

   const onClickfocus = ()=>{
       //document.querySelector('input').select()
       ref.current.select()
   }



    return (
        <>
         <h1>Focus screen</h1>
         <hr/>
         <input
            ref={ref}
            type="text"
            placeholder="Enter your name here..."
            className='form-control'
         />

         <button className="btn btn-primary" onClick={onClickfocus}>Set Focus</button>
            
        </>
    );
}

export default FocusSecreen;
