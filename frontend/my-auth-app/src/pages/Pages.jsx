import React,{useState} from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Account from "./Account"
import SignUp from "./SignUp"
import Login from "./Login"
import Product from './Product'
import Type from './Type'
import Cart from "../components/Cart"

function Pages() {
  const isUserSignedin = !!localStorage.getItem('token')

  return (
    <div>
        <Routes>
  <Route path="/" element={<Home />}  />
  <Route path="/login" element={<Login />}  />
  <Route path="/signup" element={<SignUp />}  />
  {isUserSignedin && <Route path="/" element={<Home />}  />}
  <Route path='/category/:category' element = {<Type />} />
  <Route path='/products/:id' element ={<Product  />} />
  <Route path= "/cart" element={<Cart  />} />
</Routes>
    </div>
  )
}

export default Pages
{/* <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Kids' Store</h1>
          <div>Cart ({cartCount})</div>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<div>
              <h2>Clothes</h2>
              <CategoryProductList category="clothes" addToCart={addToCart} />
              <h2>Toys</h2>
              <CategoryProductList category="toys" addToCart={addToCart} />
            </div>} />
            <Route path="/products/:id" element={<ProductDetail addToCart={addToCart} />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} updateCartItem={updateCartItem} />} />
          </Routes>
        </main>
      </div>
    </Router> */}
      // const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);
  // const addToCart = (product) => {
  //   const existingItem = cartItems.find(item => item.productId === product._id);
  //   if (existingItem) {
  //     updateCartItem(product._id, existingItem.quantity + 1);
  //   } else {
  //     setCartItems([...cartItems, { ...product, quantity: 1 }]);
  //     setCartCount(cartCount + 1);
  //   }
  // };

  // const updateCartItem = (productId, quantity) => {
  //   axios.put(`http://localhost:3005/api/cart/${productId}`, { quantity })
  //     .then(response => {
  //       setCartItems(response.data.cartItems);
  //       const newCartCount = response.data.cartItems.reduce((total, item) => total + item.quantity, 0);
  //       setCartCount(newCartCount);
  //     })
  //     .catch(error => {
  //       console.error("Error updating cart item", error);
  //     });
  //   }