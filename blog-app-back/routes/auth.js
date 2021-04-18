const express = require("express");
const router = express.Router();

// validator import
const { userSignupValidator } = require("../validator");

// controllers
const { signup } = require("../controllers/auth");
const { userById } = require("../controllers/user");

router.post("/signup", userSignupValidator, signup);

// param middleware
router.param("userId", userById);

module.exports = router;
