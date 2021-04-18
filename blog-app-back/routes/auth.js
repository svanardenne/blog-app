const express = require("express");
const router = express.Router();

// validator import
const { userSignupValidator } = require("../validator");

// controllers
const { signup, signin, signout } = require("../controllers/auth");

router.post("/signup", userSignupValidator, signup);
router.get("/signin", signin);
router.get("/signout", signout);

module.exports = router;
