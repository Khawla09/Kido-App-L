const User = require("../models/userSchema");

const jwt = require("jsonwebtoken");
const SECRET_KEY = "secretkey"
const bcrypt = require("bcrypt");

const registerUser = (async (req, res) => {
    try {
      const { email, username, password, name, address } = req.body;
      // bcrypt => password(hide it) 10 is how hard gonna be to decrypt it
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ email, username, password: hashedPassword, name, address });
      await newUser.save();
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error signing up" });
    }
  } )

  const getRegisteredUsers = (async (req, res) => {
    try {
      const users = await User.find();
      res.status(201).json(users);
    } catch (error) {
      res.status(500).json({ error: "Unable to get users!" });
    }
  })

  const deleteRegisteredUser = (async(req,res)=>{
    try {
      const deleteUser =  await User.findByIdAndDelete(req.params.id);
      res.status(201).json({message: "User Deleted successfully", deleteUser})
    } catch (error) {
      res.status(500).json({ error: "Error Deletin User" });
    }
  })
   
  const getSingleRegistered = (async(req,res)=>{
    const oneUser = await User.findById(req.params.id)
    res.json(oneUser)
  })

  const postProfile =  (async (req, res) => {
    const userId = req.user.userId; // Extract userId from token
    const { name, address } = req.body;
  
    try {
      // Check if user exists
      let user = await User.findById(userId);
  
      if (!user) {
        // User not found
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Update user's name and address
      user.name = name;
      user.address = address;
  
      // Save the updated user
      await user.save();
  
      res.json({ message: 'Profile created/updated successfully', user });
    } catch (error) {
      res.status(500).json({ error: 'Error creating/updating profile' });
    }
  });
  
  const userLogin = (async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
 
      if (!user) {
        return res.status(401).json({ error: "invalid credentials" });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: "invalid credentials" });
      }
     
      const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
        expiresIn: "1hr",
      });
      //success status
      res.status(200).json({ message: "Login successful", userId: user._id, username: user.username, token: token });
     

    } catch (error) {
      res.status(500).json({ error: "Error logging in" });
    }
  });
  const getUserProfile = (async(req,res)=>{
    try {
      const user = await User.findById(req.user.id).select('-password');//exclude paassword from the rsponse
      res.json(user)
    } catch (error) {
      res.status(500).json({ error: "Error getting user profile" });
    }
  });
  const updateUserProfile = (async(req,res)=>{
    try {
      const {name, address} = req.body;
      const user = await User. findByIdAndUpdate(
        req.user.id,
        {name, address},
        {new: true}
      )
      res.json(user)
    } catch (error) {
      
    }
  })
  const deleteUserAcc = (async(req, res)=>{
    try {
      await User.findByIdAndDelete(req.user.id);
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  })
  module.exports = {registerUser, getRegisteredUsers,getSingleRegistered, deleteRegisteredUser, userLogin,  getUserProfile, updateUserProfile, deleteUserAcc, postProfile} 