import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
// import Practice from './Practice'

  // let minutes = new Date().getMinutes()
  // let seconds = new Date().getSeconds()

    // useEffect(()=>{
  //  const play = setInterval(() => {
  //     setCount(count+1)
  //   }, 1000);
  // },[])
  


function App() {
  // let hour = new Date().getHours()
  // let minutes = new Date().getMinutes()
  let seconds = new Date().toLocaleTimeString();
  const  [count, setCount] = useState(`${seconds} `)
  // setInterval(()=>{
  //  return {seconds} 
  // },1000);
  setInterval(me,1000)
  function me() {
    
    let seconds1 = new Date().toLocaleTimeString();
   setCount(seconds1)
  }

    return (
        <div>
            
                <h1>{count}</h1>
                <button onClick={me}>Check Time
                </button>
            
        </div>
    )
}

export default App;
