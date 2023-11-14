import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StateContextProvider } from './Context/StateContex.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

  <StateContextProvider>
   <BrowserRouter>
   <React.StrictMode>
      <App />
      </React.StrictMode> 
   </BrowserRouter> 
  </StateContextProvider>
  
)
