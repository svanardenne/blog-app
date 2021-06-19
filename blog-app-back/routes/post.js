const express = require("express");

// Router
const router = express.Router();

// Imports signup controller
const { userById } = require("../controllers/user");

// Imports authentication controllers
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);

router.param("userId", userById);

module.exports = router;
