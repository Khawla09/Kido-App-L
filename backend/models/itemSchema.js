const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
   
       title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  }, 
   


}, {
  timestamps: true, // Adds createdAt and updatedAt timestamps
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
