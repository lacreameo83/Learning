import React from "react";
import {data} from "./data"
import First from "./First";

function Find(el){
 return <div>
    <First 
    address={el.address}
    me={el.me}
    go={el.go}
/>
 </div>
}

function Final(){
    return <div>
        {data.map(Find)}
    </div>
}








export default Final;