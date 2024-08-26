import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import {CartProvider} from "../src/components/CartContext.jsx"
import { UserProvider } from './components/UserContext.jsx'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
{/* <UserProvider> */}
  <CartProvider>
    <App />
    </CartProvider>
    {/* </UserProvider> */}
  </BrowserRouter>,
)
