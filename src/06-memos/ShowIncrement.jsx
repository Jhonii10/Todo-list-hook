
// eslint-disable-next-line react/prop-types
const ShowIncrement = ({increment}) => {
    return (
         <button  className="btn btn-primary"
                  onClick={()=>increment(5)}
         >
            incrementar
         </button>
            
      
    );
}

export default ShowIncrement;
