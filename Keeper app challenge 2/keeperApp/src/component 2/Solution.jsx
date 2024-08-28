import React from "react";
import { details } from "./details";
import Practice from "./Practice";


function find(x){
    return(
        <div>
            <Practice 
            key={x.key}
                name= {x.name}
                info= {x.info}
            />
        </div>
    )
    
}

function Solution(){
    return(
        <div>
            {details.map(find)}
        </div>
    )
}

export default Solution;
