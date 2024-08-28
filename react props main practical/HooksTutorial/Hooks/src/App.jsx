import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
function login(){
   setCount(count + 1)
  
   
}
function logout(){
   setCount(count - 1)
}

  return (
    <div>
    <button onClick={login} >you clicked {count} times </button>
    <button onClick={logout}> decresin</button>
      
    </div>
      
     
  )
}

export default App
