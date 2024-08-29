require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT
const cors = require("cors");
const bodyParser = require("body-parser");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const User = require("./models/userSchema");

const connectDB = require("./db/connectDb")
//ROutes
const productRouter = require("./routes/productRoute");
// const cartRouter = require("./routes/cartRoute")
const itemRouter = require("./routes/itemRoute")
const userRouter = require("./routes/userRoute")
const data = require("./db/products");
const Product = require("./models/productSchema")

//connect to express

const app = express();
// app.use(express.static('public'));


// Middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));
// app.use('/images', express.static('public/images'));


//middleware
app.use((req,res,next)=>{
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`)
  next()
})
//connect to mongoDB
connectDB()


//Routes CRUD
app.get("/home",(req,res)=>{
  res.json({msg:"heello"})
})
//seed 

app.use("/api/products", productRouter);
app.use("/api/user", userRouter);
app.use("/api/reviews", itemRouter)
// app.use("/api/cart", cartRouter)

// app.use("/api/products", categoryRouter)
app.get('/api/seed', async (req, res) => {
  try {
    await Product.deleteMany({})
      const createProd = await Product.insertMany(data)
      res.send({createProd})
   
  } catch (error) {
    res.status(500).send(error);
  }
});




//

//insert data

  //listen port
app.listen(PORT, console.log('connected to port '+PORT)
      );