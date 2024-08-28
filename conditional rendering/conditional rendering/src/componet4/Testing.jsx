import React, { useState } from 'react'

const data =[{
    name:"precious",
    age:50,
    location:"Awka"
},{
    name:"sopuru",
    age:40,
    location:"Awka"
},{
    name:"onyeka",
    age:60,
    location:"grace"
}]


 function Testing() {
    const[inputValue,setInputValue]= useState("");
    function hadleInputValue(e){
        return setInputValue(e.target.value)
    }
  return (
    <div>
    <input type='text' placeholder='  check' value={inputValue} onChange={hadleInputValue}/>
    <button>Click to check</button>
      
    </div>
  )
}

export default Testing;
