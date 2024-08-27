// import axios from 'axios';
import React, { useContext } from 'react';
// import { CartContext } from './CartContext';
import { useCart } from './CartContext';
const Cart = () => {
  // const { cartItems, updateCartItem, removeFromCart} = useContext(CartContext);
const {cartItems, removeFromCart, updateQuantity, loading , getCartItems} = useCart();
if(loading) return <p>Loading cart...</p>
// const handleQunatityChange = (productId, qunatity)=>{
// updateQuantity(productId, qunatity)
// }
const handleIncrease = (e, cartId, productId, quantity) => {
  e.preventDefault()
  updateQuantity(cartId, productId, quantity + 1);
};

// Function to handle decreasing quantity
const handleDecrease = (e, cartId, productId, quantity) => {
  e.preventDefault()
  if (quantity > 1) {
    updateQuantity(cartId, productId, quantity - 1);
  } else {
    removeFromCart(cartId);
  }
};
 const handleRemove = (productId) =>{

  removeFromCart(productId)
 }
 console.log(cartItems)


  return (
    <div>
      <h2>Your Cart</h2>
      {cartItems && cartItems.length > 0 ? (
        cartItems.map(cartItem =>(
          <div key={cartItem._id}>
          {cartItem.items && cartItem.items.length > 0 ? 
           ( cartItem.items.map(item => (
              <div key={item.product._id}>
                <h3>{item.product.name || 'Product Name Missing'}</h3>
                <p>Price: ${item.product.price}</p>
                <img src={item.product.images[0]} alt="image not found" style={{height:"100px", maxWidth:"100px"}} />
            
                <div>
                <button onClick={(e) => handleDecrease(e, cartItem._id, item.product._id, item.quantity)}>-</button>
                <span>quantity: {item.quantity }</span>
                <button onClick={(e) => handleIncrease(e, cartItem._id, item.product._id, item.quantity)}>+</button>
              </div>
            <button onClick={() => handleRemove(cartItem._id)}>Remove</button> 
            <p>Total: {(item.product.price*item.quantity).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p>No items in this cart.</p>
          )}
        </div>
      ))
    ) : (
      <div>Your cart is empty.</div>
    )}
        
    </div>
  );
};

export default Cart;

 {/* // ) : (
      //   <ul>
      //     {cartItems.items.map((item) => ( */}
      {/* //       <li key={item._id}>
      //          <h3>{item.product.name || 'Product Name Missing'}</h3>
      //          <p>Price: ${item.product.price}</p>
      //         {/* <img src={item.data.images[0]} alt="NA image" /> */}
      //         {/* <img src={item.images[0]} alt=""  /> */}
      {/* //         <p>quantity:
      //         <input type="number" min='1' value={item.quantity} onChange={(e)=> handleQunatityChange(item.product._id, parseInt(e.target.value,10))} /> 
      //          </p>
      //         {/* <button onClick={() => handleQunatityChange(item.product._id, item.quantity + 1)}>+</button>
      //         <button onClick={() => handleQunatityChange(item.product._id, item.quantity - 1)}>-</button> */}
      {/* //         <button onClick={() => handleRemove(item.product._id)}>Remove</button>
      //       </li> */} 
      {/* //     ))}
      //   </ul> */}
      // ) */}
   