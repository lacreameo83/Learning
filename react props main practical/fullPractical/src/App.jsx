import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Final from './Components/Final'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Final />
   </div>
  )
}

export default App
