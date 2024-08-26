const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true, unique:true },
      quantity: { type: Number,  min: 1 },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;





