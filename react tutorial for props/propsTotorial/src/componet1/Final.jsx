import React from "react";
import {data} from "./data";
import Mainbox from "./Mainbox";

function Find(p){
    return <Mainbox 
        name={p.name}
        age={p.age}
        tel={p.tel}
        email={p.mail}
    />
}

{data.map(Find)}

// function Final(){
//  return(
//    <div>
//     {data.map((el)=>{
//         return <Mainbox name={el.name} age={el.age}/>
//     })}
//    </div>

//  ) 
    
 
// }

export default Final;