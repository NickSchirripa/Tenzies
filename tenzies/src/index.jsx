import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode  style={{ border: '2px solid #ff6600', padding: '10px' }}>
    <App />
  </StrictMode>,
)
