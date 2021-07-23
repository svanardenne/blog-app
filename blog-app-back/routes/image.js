const express = require("express");
const router = express.Router();

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

const { userById } = require("../controllers/user");

const { imageById, create, getImages, image } = require("../controllers/image");

// create image and caption
router.post("/image/create/:userId", requireSignin, isAuth, isAdmin, create);

// gets all images
router.get("/images", getImages);

// displays image
router.get("/image/:imageId", image);

// Route params
router.param("userId", userById);
router.param("imageId", imageById);

module.exports = router;
