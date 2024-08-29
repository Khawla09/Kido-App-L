import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { Provider } from 'react-redux';
// import store from './store.js';
import { BrowserRouter } from 'react-router-dom'
// import {CartProvider} from "../src/components/CartContext.jsx"
// import { UserProvider } from './components/UserContext.jsx'
import { Context } from './context/Context.jsx';
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
{/* <UserProvider> */}
  {/* <CartProvider> */}
  {/* <Provider store={store}> */}

 <Context>
    <App />
    </Context>
    {/* </Provider> */}
    {/* </CartProvider> */}
    {/* </UserProvider> */}
  </BrowserRouter>,
)
