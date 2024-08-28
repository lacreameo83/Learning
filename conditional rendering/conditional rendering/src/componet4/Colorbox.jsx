import React, { useState } from "react";

function Colorbox(){
const [color1,setcolor]=useState("")
 const  handlecolor =(e)=>{
  setcolor(e.target.value)
 }
 const [click,setclick]=useState();
 function handleclick(){
   setclick(color1 === color1 ? color1 : (<p>Not color</p>))
   setcolor("")
 }
    return(
        <div>
        <section className="sec1" style={{backgroundColor:click}}>
            <input type="text" placeholder="add color" onChange={handlecolor} value={color1}/>
            <button onClick={handleclick}>click</button>
        </section>
        </div>
    )
}

export default Colorbox;