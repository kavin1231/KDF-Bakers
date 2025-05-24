import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/style.css'; // Import the global styles from the original project
import './index.css' // Vite's default/minimal CSS, can be kept or removed

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
