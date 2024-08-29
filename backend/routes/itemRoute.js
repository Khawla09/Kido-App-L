const express = require('express');
const router = express.Router();
const Item = require('../models/itemSchema');

// Create a new item
router.get("/items", async(req,res)=>{
    try {
        const items =await  Item.find();
        res.json(items)
    } catch (error) {
        res.status(500).send({ error: 'Failed to create item' });
    }
})
//////////////////////////////////////////////
router.post('/items', async (req, res) => {
  try {
    const { title, description } = req.body;

    // Create a new item
    const newItem = new Item({ title, description });
    await newItem.save();

    res.status(201).send(newItem);
  } catch (error) {
    res.status(500).send({ error: 'Failed to create item' });
  }
});

// Update an item
router.put('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    // Find the item and update it
    const item = await Item.findByIdAndUpdate(id, { title, description }, { new: true });

    if (!item) {
      return res.status(404).send({ error: 'Item not found' });
    }

    res.send(item);
  } catch (error) {
    res.status(500).send({ error: 'Failed to update item' });
  }
});

// Delete an item
router.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Find the item and delete it
    const item = await Item.findByIdAndDelete(id);

    if (!item) {
      return res.status(404).send({ error: 'Item not found' });
    }

    res.send({ message: 'Item deleted successfully' });
  } catch (error) {
    res.status(500).send({ error: 'Failed to delete item' });
  }
});

module.exports = router;
