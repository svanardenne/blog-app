const express = require("express");
const router = express.Router();

// Controllers
const { userById } = require("../controllers/user");
const {
  postById,
  postBySlug,
  read,
  create,
  listAll,
  update,
  remove,
  photo,
} = require("../controllers/blogPost");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// Create post
router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);

// Show posts
router.get("/posts", listAll);

// Get post with slug
router.get("/posts/:slug", postBySlug);

// Get photos
router.get("/post/photo/:postId", photo);

// Route params
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
