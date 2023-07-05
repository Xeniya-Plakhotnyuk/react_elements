import {
    useState,
    useRef
  } from "react"; 
  import "./calc.css";
  
  function Calc() { 
    const inputRef = useRef(null); 
    const resultRef = useRef(null); 
    const [result, setResult] = useState(0); 
   
    function plus(e) { 
      e.preventDefault(); 
      setResult((result) => result + Number(inputRef.current.value)); 
    }; 
   
    function minus(e) { 
      e.preventDefault();
      setResult((result) => result - Number(inputRef.current.value));
    };
   
    function times(e) { 
      e.preventDefault();
      setResult((result) => result * Number(inputRef.current.value))
        }; 
   
    function divide(e) { 
      e.preventDefault();
      setResult((result) => result/Number(inputRef.current.value))
    };
  
    function resetInput(e) { 
     e.preventDefault();
     inputRef.current.value = ''
    }; 
   
    function resetResult(e) { 
      e.preventDefault();
        setResult((result) => result * 0)
    }; 
   
    return ( 
      <div className="container"> 
        <div> 
          <h1>Simply Calc</h1> 
        </div> 
        <form className="calc"> 
          <p ref={resultRef} className="res"> 
            {result} 
          </p> 
          <input
            pattern="[0-9]" 
            ref={inputRef} 
            type="number" 
            placeholder="Type your number" 
          /> 
          <button onClick={plus}>add</button> 
          <button onClick={minus}>subtract</button>
          <button onClick={times}>multiply</button>
          <button onClick={divide}>divide</button>
          <button onClick={resetInput}>reset your number</button>
          <button onClick={resetResult}>reset result</button>
                       </form> 
      </div> 
    ); 
  } 
   
  export default Calc; 
  