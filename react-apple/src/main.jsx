import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css' 
import "jquery/dist/jquery.min.js"
import "bootstrap/dist/js/bootstrap.min.js";




// import './index.css'
import App from './App.jsx'

import './App.css';
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
 