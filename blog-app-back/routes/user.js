const express = require("express");

// router
const router = express.Router();

// imports signup controller
const { userById, read } = require("../controllers/user");

router.get("/user/:userId", read);

router.param("userId", userById);

module.exports = router;
