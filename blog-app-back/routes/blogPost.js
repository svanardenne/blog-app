const express = require("express");
const router = express.Router();

// controllers
const { userById } = require("../controllers/user");
const { postById, create } = require("../controllers/blogPost");
const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

// create post
router.post("/post/create/:userId", requireSignin, isAuth, isAdmin, create);

// get and read all posts
router.get("/posts");

// get and read a post by id
router.get("/post/:postId");

// update a post
router.put("/post/update/:postId");

// delete a post
router.delete("/post/delete/:postId");

// route params
router.param("userId", userById);
router.param("postId", postById);

module.exports = router;
