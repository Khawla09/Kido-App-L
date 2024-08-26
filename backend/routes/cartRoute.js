// Add to cart endpoint
const express = require("express");
const router = express.Router();
const Product = require("../models/productSchema")
const Cart = require("../models/cartSchema")
//



//  /cart http://localhost:3005/api/cart worked
router.post('/', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const newCart = new Cart({
      items: [{ product: productId, quantity }],
    });

    await newCart.save();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(400).json({ message: 'Error creating cart', error });
  }
});
//get product added to cart
//http://localhost:3005/api/cart/66cca741d2dc33fd7c9ced27   worked
router.get("/", async(req,res)=>{
   const cartItems = await Cart.find().populate('items.product');
res.json({cartItems})


 
})
router.get('/:id', async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id).populate('items.product');
    if (!cart) return res.status(404).json({ message: 'Cart not found' });
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart', error });
  }
});
//update qunatity
router.put('/:id', async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
      // If the product is already in the cart, update the quantity
      cart.items[itemIndex].quantity = quantity;
    } else {
      // If the product is not in the cart, add it
      cart.items.push({ product: productId, quantity });
    }

    await cart.save();
    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: 'Error updating cart', error });
  }
});
//delete
router.delete('/:id', async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    res.json({ message: 'Cart deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting cart', error });
  }
});


// router.post('/', async (req, res) => {
//     try {
//       const { productId, quantity } = req.body;
  
//       // Retrieve product by ID
//       const product = await Product.findById(productId);
  
//       if (!product) {
//         return res.status(404).json({ message: 'Product not found' });
//       }
  
//       // Simulate adding product to cart (you would need a Cart model in a real app)
//       const cartItem = {
//         productId: product._id,
//         name: product.name,
//         image: product.images[0],
//         price: product.price,
//         quantity: quantity || 1,
//       };
  
//       // In a real scenario, you'd save this in the database
//       res.status(200).json({ message: 'Item added to cart', cartItem });
//     } catch (error) {
//       res.status(500).json({ message: 'Error adding item to cart', error });
//     }
//   });
// Use this for adding a new item to the cart , userId
// router.post('/', async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
    
//     // Check if the item already exists in the cart
//     let cartItem = await Cart.findOne({ productId, userId });
    
//     if (cartItem) {
//       //if item exists increase the qunatity
//        cartItem.quantity += quantity
//  }
//     else{
//       //if not exists create a new cart item
//       cartItem = new Cart({productId, quantity, userId})
//     }
//     await cartItem.save();
//     res.status(201).json({message: 'Item added to cart',cartItem})
//        console.log('Product ID:', productId);
//        console.log('Quantity:', quantity);
//   } catch (error) {
//     console.error('Error adding to cart:', error);
//     res.status(500).json({ message: 'Error adding to cart', error });
//   }
// });
// //get cart items
//   router.get("/", async(req,res)=>{
//     try {
//       const cartItem =  await Cart.find({});
//       res.json(cartItem)
//     } catch (error) {
//       res.status(500).json({msg:"WHoops can't get Cart Items"})
//       console.log(error.msg)
//     }
//   })
//   //update
//   // Update cart item quantity
//   router.put('/:cartId', async (req, res) => {
//     const { cartId } = req.params;
//     const { quantity } = req.body;

//     try {
    
//       if (quantity <= 0) {
//         // Remove item if quantity is 0 or less
//         await Cart.findByIdAndDelete( cartId );
//       }
//       const cartItem = await Cart.findOneAndUpdate(
//         cartId, { quantity },{ new: true } 
//         );
  
//         if (!cartItem) {
//           return res.status(404).json({ message: 'Cart item not found' });
//         }
//      // const updatedCart = await Cart.find();
//       res.status(200).json({ message: 'Cart updated', cartItem });
//     } catch (error) {
//       res.status(500).json({ message: 'Error updating cart', error });
//     }
//   });
//   //delete item
//   router.delete('/:cartId', async (req, res) => {
//     const { cartId } = req.params;
//     try {
//       const deletedItem = await Cart.findByIdAndDelete(cartId);
  
//       if (!deletedItem) {
//         return res.status(404).json({ message: 'Cart item not found' });
//       }
  
//      res.status(200).json({ message: 'Item removed from cart' });
//     } catch (error) {
//       res.status(500).json({ message: 'Error removing from cart', error });
//     }
//   });
  


module.exports = router;
 
  