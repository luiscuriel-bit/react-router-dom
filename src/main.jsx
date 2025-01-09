import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Allows routes to be set up in the App.js x*/}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
