import React from "react";

function First(props){
    return(
        <div className="mm">
        <img src={props.img}/>
         <h1 className= {props.hh}>{props.address}</h1>
         <p>{props.me}</p>
         <p>{props.go}</p>
         <p>{props.come}</p>
        </div>
    )
}

export default First;