// routes/blogRoutes.js

const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const multer = require("multer");

// Multer configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory for storing uploaded images
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); // Image file name
  },
});

// Initialize multer for file upload
const upload = multer({ storage });

// Route to create blog with image upload
router.post("/create", upload.single("image"), blogController.create);

// Other routes
router.get("/blogs", blogController.getAllBlogs);
router.get("/blog/:slug", blogController.singleBlog);
router.delete("/blog/:slug", blogController.remove);
router.put("/blog/:slug", upload.single("image"), blogController.update); // Handle image update

module.exports = router;
