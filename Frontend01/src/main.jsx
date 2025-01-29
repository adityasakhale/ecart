import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ShopContextProvider from './context/ShopContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ShopContextProvider>
    <App/>
  </ShopContextProvider>
  </BrowserRouter>,
)
