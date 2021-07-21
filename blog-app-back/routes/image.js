const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById } = require("../controllers/user");

const { create } = require("../controllers/image");

// create image and caption
router.post("/image/create/:userId", requireSignin, isAuth, isAdmin, create);

// Route params
router.param("userId", userById);

module.exports = router;
