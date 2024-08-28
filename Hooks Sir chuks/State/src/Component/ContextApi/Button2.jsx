import React, { useContext } from 'react'
import { Globalcontext } from './GlobalContext'

function Button2() {
    const {count,setcount} = useContext(Globalcontext);
    const handleAddCount = ()=>{
        setcount(count + 1)
    }
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={handleAddCount}>click me</button>
      
    </div>
  )
}

export default Button2
