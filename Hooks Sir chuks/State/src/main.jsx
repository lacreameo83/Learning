import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Globalcontextprovider } from './Component/ContextApi/GlobalContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Globalcontextprovider>
  <App />
  </Globalcontextprovider>
   
  </React.StrictMode>,
)
