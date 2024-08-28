import React from "react";

function Input(props){
    return <div>
        <input type={props.tpe} placeholder={props.placeholder}></input>
        <button>{props.button}</button>
       
    </div>
}

export default Input;