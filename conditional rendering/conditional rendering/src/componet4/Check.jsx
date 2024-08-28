import React, { useState } from 'react'

const Check = () => {
 const [inputvalue,setinputvalue]=useState("");
 const [items,setitems]=useState([]);
 function handleinput(e){
    setinputvalue(e.target.value)
 }
 const handleclick= (item)=>{
    setitems([...items,item])
    

    setinputvalue("")
 }

   return(
    <div>
        <input type='text' placeholder='  add items' value={inputvalue} onChange={handleinput} />
        <button onClick={()=>handleclick(inputvalue) }>Add</button>
        <div><ul>{items.map((e)=>{
            
            return <li>{e}</li>
        })}</ul></div>
    
    </div>
    
   )
    
}

export default Check
