import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios"
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  // const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  //fetch carts
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get('http://localhost:3005/api/cart'); 
        console.log("Fetched cart data", response.data)
        setCartItems(response.data.cartItems || []);
      } catch (error) {
        console.error('Error fetching cart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

//add to cart
  const addToCart =async (productId, quantity = 1) => {
    // const addToCart =async (productId, quantity ) => {
    try {
      const response = await axios.post('http://localhost:3005/api/cart', { productId, quantity }); 
      setCartItems((prevCart) => {
        if (!Array.isArray(prevCart)) prevCart = [];
        const itemIndex = prevCart.findIndex(item => item.product && item.product._id === productId);
        if (itemIndex > -1) {
          const updatedCart = [...prevCart.items];
          updatedCart[itemIndex].quantity += quantity;
          // return updatedCart;
          return { ...prevCart, items: updatedCart };
        }
        return { 
          ...prevCart, 
          items: [...prevCart.items, { product: { _id: productId }, quantity }] 
      };
        // return [...prevCart, response.data];
      });
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };
  //update Qunatity
//   useEffect(()=>{
// updateQuantity()
//   },[qunatity])
  const updateQuantity = async(cartId, productId, quantity) =>{
    try {
      const response = await axios.put(`http://localhost:3005/api/cart/${cartId}`, { productId, quantity }); 
      setCartItems((prevCart) => {
        if (!Array.isArray(prevCart)) prevCart = [];
        if (quantity <= 0) {
          return prevCart.filter(item => item._id !== cartId);
        }
        return prevCart.map(item => 
          item._id === cartId ? response.data : item
        );
      });
    } catch (error) {
      console.error('Error updating item quantity:', error);
    }
  }

  const removeFromCart = async (cartId) => {
    try {
      await axios.delete(`http://localhost:3005/api/cart/${cartId}`); 
      setCartItems((prevCart) => prevCart.filter(item => item._id !== cartId));
    } catch (error) {
      console.error('Error removing item from cart:', error);
    }
  };
  const getCartItems = () => cartItems;

  // const clearCart = () => {
  //   setCartItems([]);
  // };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, updateQuantity, getCartItems, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);

export default CartContext;
