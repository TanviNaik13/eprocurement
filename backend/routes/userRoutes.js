const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const verifyJWT = require("../middleware/jwtAuth");
const userController = require("../controllers/userController")

router.post("/signin",userController.signIn)

router.post("/googlesignin",userController.googleSignIn)

router.post("/signup",userController.signUp)

router.post("/isauth",verifyJWT,userController.isAuth)
module.exports = router;