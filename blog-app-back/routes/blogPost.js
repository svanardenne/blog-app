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

// Get and read all posts
router.get("/posts", listAll);

// Get and read a post by id
router.get("/post/:postId", read);

// Update a post
router.put(
  "/post/update/:postId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

// Delete a post
router.delete(
  "/post/remove/:postId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  remove
);

// Route params
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
