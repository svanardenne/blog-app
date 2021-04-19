const express = require("express");
const router = express.Router();

// controllers
const { userById } = require("../controllers/user");
const {
  postById,
  read,
  create,
  listAll,
  update,
} = require("../controllers/blogPost");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// create post
router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);

// get and read all posts
router.get("/posts", listAll);

// get and read a post by id
router.get("/post/:postId", read);

// update a post
router.put(
  "/post/update/:postId/:userId",
  requireSignin,
  isAuth,
  isAdmin,
  update
);

// delete a post
router.delete("/post/delete/:postId");

// route params
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
