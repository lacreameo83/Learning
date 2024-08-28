import React, { useState } from "react";


 const data =["am fine thanks","yes am good","thanks alot"]

function Todo(){

    const [isdisplay1,setisdisplay1] =useState(false);
    const handleDisplay1 = ()=>{
         setisdisplay1(true)
         setInterval(setisdisplay1,2000)
         
    }
    const [isdisplay2,setisdisplay2] =useState(false);
    const handleDisplay2 = ()=>{
         setisdisplay2(true)
         setInterval(setisdisplay2,2000)
    }
    const [isdisplay3,setisdisplay3] =useState(false);
    const handleDisplay3 = ()=>{
         setisdisplay3(true);
         setInterval(setisdisplay3,2000)
    }

    return(
        <div>
            <button className="btn" onClick={handleDisplay1}>hello how are you doing</button>
            {isdisplay1 ? (<p className="displayItems">{data[0]}</p>) : null}
            <button className="btn" onClick={handleDisplay2}>hope your good</button>
            {isdisplay2 && (<p className="displayItems">{data[1]}</p>)}
            <button className="btn" onClick={handleDisplay3}>how is the food</button>
            {isdisplay3 && (<p className="displayItems">{data[2]}</p>)}
        </div>
    )
}


export default Todo;