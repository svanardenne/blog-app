const express = require("express");

// Router
const router = express.Router();

// Imports signup controller
const { userById, read } = require("../controllers/user");

router.get("/user/:userId", read);

router.param("userId", userById);

module.exports = router;
