import React from 'react'
import './assets/stylesheets/views-styles/General.css'
import ReactDOM from 'react-dom/client'
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
  </React.StrictMode>
)
