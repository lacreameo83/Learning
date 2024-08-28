import React, { useState } from 'react'

function Randomcolor() {

    
    const [color,setColor]=useState("");
    
const handleclick = ()=>{
    const random = Math.random()*6
    const number= random.toString(16).slice(-6)
   
    setColor(`#${number}`)

}
  return (
    <div>
      <div style={{backgroundColor:color, height:"30vh",width:"30vh"}}>
      <h1>{color}</h1>
        
        <button onClick={handleclick}>Genarate color</button>
      </div>
    </div>
  )
}

export default Randomcolor
