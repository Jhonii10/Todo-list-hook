/* eslint-disable react/prop-types */

import { useLayoutEffect, useRef, useState } from "react";

const Quote = ({data,counter}) => {
 
    const ref = useRef();
    const [boxSize, setBoxSize] = useState({
        width:0,
        height:0
    });

   useLayoutEffect(()=>{
      const {width , height }=(ref.current.getBoundingClientRect())
      setBoxSize({
        width,
        height,
      })
   },[data[counter].quote])





    return (
        <>
        <blockquote className="blockquote text-end"
          style={{display:'flex'}}
        >
                <p className="mb-1" ref={ref}>{data[counter].quote}</p>
                <footer className="blockquote-footer">Jhoni</footer>

                 </blockquote>

                 <code>{JSON.stringify(boxSize)}</code>
                 </>
    );
    
}

export default Quote;
