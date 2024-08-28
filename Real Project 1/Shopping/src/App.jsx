import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Information from './Component/Template/Information'

function App() {
  const [count, setCount] = useState(0)
 let isUser =true
  return (
    <div >
      <div className='productFinal'>
      <Information 
      productPercentage={isUser} 
      />
     
      </div>
    
    </div>
  )
}

export default App
