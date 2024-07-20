import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Navbar.jsx'
import TableOne from './Table.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Navbar />
    <App username="paresh"/>
    <App  username="dixit"/>
    <App />
    <App />
    <App />
    <App />
    <App /> */}

    <TableOne />

  </React.StrictMode>,
)
