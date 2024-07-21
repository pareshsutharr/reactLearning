import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './header.jsx'
import './index.css'

// const [comp , setcomp] = useState(true)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <>
   <App />
   <Header/>
   </>
  </React.StrictMode>,
)
