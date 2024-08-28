import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Keeper from './component 1/Keeper'
import Solution from "./component 2/Solution.jsx"
import Footer from "./component 3/Footer.jsx"
import { details } from './component 2/details.js'
import Practice from './component 2/Practice.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Keeper />
    <Solution />
    
    <Footer />
    </div> 
  )
}

export default App;
