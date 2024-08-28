import React from "react";

function Practice(props){
    return(
        <div className="parent">
        
                <h2>{props.name}</h2>
                 <p>{props.info}</p>

        </div>
    )
}

export default Practice;