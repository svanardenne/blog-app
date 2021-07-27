const express = require("express");
const router = express.Router();

// Controllers
const { signin, signout } = require("../controllers/auth");

router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
