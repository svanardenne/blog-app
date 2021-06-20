const express = require("express");
const router = express.Router();

// Controllers
const { userById } = require("../controllers/user");
const {
  postById,
  read,
  create,
  listAll,
  update,
  remove,
} = require("../controllers/blogPost");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// Create post
router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);

// Route params
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
