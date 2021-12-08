const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts.js");
// this is the exact relative path: L2-Assignment-2-V2/api/controllers/posts.js

router.get("/", postsController.index);
router.get("/:id", postsController.show);
router.post("/", postsController.create);

module.exports = router;