import React,{useContext} from "react";
import { Globalcontext } from "./GlobalContext";

function Pass(){
    const {count,setcount} = useContext(Globalcontext);
return(
    <div>
        <h1>{count}</h1>
        
    </div>
)
}

export default Pass;