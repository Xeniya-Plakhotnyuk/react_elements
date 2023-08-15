import { useReducer } from "react";

function reducer (state, action){
    switch(action.type){
        case 'MULTIPLY': return {count: state.count * 5};
        case 'DIVIDE': return {count: state.count / 5};
        default: return state;
    }
    
}

function Count(){

const[state, dispatch] = useReducer(reducer, { count: 5} )


 return(
        <div>
            <p>{state.count}</p>
            <button onClick={()=>dispatch({type: 'MULTIPLY'})}>MULTIPLY</button>
            <button onClick={()=> dispatch({type: 'DIVIDE'})}>DIVIDE</button>
        </div>
    )   
}

export default Count;



