const express = require("express");
const router = express.Router();

// controllers
const { postById } = require("../controllers/blogPost");

// create post
router.post("/post/create");

// get and readd all posts
router.get("/post");

// get and read a post by id
router.get("/post/:postId");

// update a post
router.put("/post/update/:postId");

// delete a post
router.delete("/post/delete/:postId");

// route params
router.param("postId", postById);

module.exports = router;
