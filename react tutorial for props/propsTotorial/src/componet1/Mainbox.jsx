import React from "react";

function Mainbox(props){
    return <div>
     <h2>{props.name}</h2>
     <p>{props.age}</p>
     <p>{props.tel}</p>
     <p>{props.email}</p>

    </div>
}

<Mainbox 
    name="precious"
/>

export default Mainbox;