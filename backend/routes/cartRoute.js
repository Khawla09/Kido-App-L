// Add to cart endpoint
const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema")
const Cart = require("../models/cartSchema")
//



//  /cart http://localhost:3005/api/cart worked
// router.post('/', async (req, res) => {
//   const { productId, quantity } = req.body;

//   try {
//     const newCart = new Cart({
//       items: [{ product: productId, quantity }],
//     });

//     await newCart.save();
//     res.status(201).json(newCart);
//   } catch (error) {
//     res.status(400).json({ message: 'Error creating cart', error });
//   }
// });
//get product added to cart
//http://localhost:3005/api/cart/66cca741d2dc33fd7c9ced27   worked
// router.get("/", async(req,res)=>{
//    const cartItems = await Cart.find().populate('items.product');
// res.json({cartItems})


 
// })
// router.get('/:id', async (req, res) => {
//   try {
//     const cart = await Cart.findById(req.params.id).populate('items.product');
//     if (!cart) return res.status(404).json({ message: 'Cart not found' });
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving cart', error });
//   }
// });
// //update qunatity
// router.put('/:id', async (req, res) => {
//   const { productId, quantity } = req.body;

//   try {
//     const cart = await Cart.findById(req.params.id);
//     if (!cart) return res.status(404).json({ message: 'Cart not found' });

//     const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

//     if (itemIndex > -1) {
//       // If the product is already in the cart, update the quantity
//       cart.items[itemIndex].quantity = quantity;
//     } else {
//       // If the product is not in the cart, add it
//       cart.items.push({ product: productId, quantity });
//     }

//     await cart.save();
//     res.json(cart);
//   } catch (error) {
//     res.status(500).json({ message: 'Error updating cart', error });
//   }
// });
// //delete
// router.delete('/:id', async (req, res) => {
//   try {
//     const cart = await Cart.findByIdAndDelete(req.params.id);
//     if (!cart) return res.status(404).json({ message: 'Cart not found' });

//     res.json({ message: 'Cart deleted successfully' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error deleting cart', error });
//   }
// });





module.exports = router;
 
  