import React,{ useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { PiBabyLight } from "react-icons/pi";
import { MdAddShoppingCart } from "react-icons/md";
import {CartContext} from "./CartContext"

function Navbar() {
const {cartItems} =  useContext(CartContext);

  const isUserSignedin = !!localStorage.getItem('token');
  const navigate = useNavigate();
  const handleSignout = (e)=>{
    e.preventDefault();
    localStorage.removeItem('token');
    navigate('/login')
  }
  return (
    <nav className='nav-bar'  >
  
      <Link to="/" ><h1 className='logo'><PiBabyLight />KIDO</h1></Link>
      <Link to="/" ><h3 className='Home'>Home</h3></Link>
      <Link to="/" ><h3 className='Help'>Help</h3></Link>
      <Link to="/" ><h3 className='More'>More</h3></Link>
      
      {/* user Auth pages */}
      <ul style={style.ul}>

        {isUserSignedin ? (<>
        <Link to='/cart'>
        <li style={style.cart_count}><MdAddShoppingCart style={style.cart_link}/> ({cartItems.length})
        </li></Link>
        <li><button onClick={handleSignout} className='signout-btn'>Sign OUt</button></li>
        </>)
        : <> 
        <Link to="/cart" className="cart-link">
        <p style={style.cart_count}><MdAddShoppingCart style={style.cart_link}/> ({cartItems.length})</p>
      </Link>
        <Link to="/login" className='login-btn'><li>Login</li></Link>
        <Link to="/signup" className='signup-btn' ><li>Sign Up</li></Link>
        </>}
       
       
      </ul>
    </nav>
  )
}
const style = {
  ul:{
  display:"flex",
  gap:"20px",
  },
  cart_link:{
    position: "relative",
    display: "flex",
      alignItems: "center",
  },
  cart_count:{
    position: "absolute",
      top: "10px",
      right: "280px",
      backgroundColor: "red",
      color: "white",
      borderRadius: "50%",
      padding: "5px 10px",
  }
}
export default Navbar
// .cart-link {
//   position: relative;
//   display: flex;
//   align-items: center;
// }

// .cart-count {
//   position: absolute;
//   top: -5px;
//   right: -10px;
//   background-color: red;
//   color: white;
//   border-radius: 50%;
//   padding: 5px 10px;
// }
