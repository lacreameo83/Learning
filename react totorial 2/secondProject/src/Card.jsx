import React from "react";

function Card(props){
    return <div className="me">
 <li>{props.id}</li>
   <li >{props.name}</li>
   <li>{props.age}</li>
   <li>{props.food}</li>
    </div>
}
export default Card;