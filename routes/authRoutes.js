const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const { expressjwt: checkJwt } = require("express-jwt");

// checkJwt({secret: process.env.JWT_SECRET, algorithms: ["HS256"]})

router.post("/", authController.login);


module.exports = router;
