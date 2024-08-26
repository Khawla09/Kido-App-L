const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
//create user registerUser, getRegisteredUsers, deleteRegisteredUser, userLogin
router.post("/register", userController.registerUser);
  //Get registered users
  router.get("/register", userController.getRegisteredUsers );
  //get by id
  router.get("/register/:id", userController.getSingleRegistered)
  //delete user
  router.delete("/register/:id",userController.deleteRegisteredUser )
  //Get Login
  router.post("/login", userController.userLogin);

  module.exports = router