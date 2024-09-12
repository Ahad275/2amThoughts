// controllers/blogController.js

const slugify = require("slugify");
const Blogs = require("../models/blogs");
const { v4: uuidv4 } = require("uuid");

// Add blog with image
exports.create = (req, res) => {
  const { title, content, author } = req.body;
  let slug = slugify(title);

  if (!slug) slug = uuidv4();

  // Validate data
  switch (true) {
    case !title:
      return res.status(400).json({ error: "Please add a title!" });
    case !content:
      return res.status(400).json({ error: "Please add content details!" });
  }

  // Handle image upload
  const imagePath = req.file ? req.file.path : null; // Store the image path if uploaded

  // Save data with image
  Blogs.create({ title, content, author, slug, image: imagePath }, (err, blog) => {
    if (err) {
      return res.status(400).json({ error: "Title name already exists!" });
    }
    res.json(blog);
  });
};

// Other blog functions
exports.getAllBlogs = (req, res) => {
  Blogs.find({}).exec((err, blogs) => {
    res.json(blogs);
  });
};

exports.singleBlog = (req, res) => {
  const { slug } = req.params;
  Blogs.findOne({ slug }).exec((err, blog) => {
    res.json(blog);
  });
};

exports.remove = (req, res) => {
  const { slug } = req.params;
  Blogs.findOneAndRemove({ slug }).exec((err) => {
    if (err) return res.status(400).json({ error: "Error deleting the blog" });
    res.json({ message: "Blog deleted successfully!" });
  });
};

// Update blog with image upload
exports.update = (req, res) => {
  const { slug } = req.params;
  const { title, content, author } = req.body;

  const imagePath = req.file ? req.file.path : null; // Store the image path if uploaded

  Blogs.findOneAndUpdate(
    { slug },
    { title, content, author, image: imagePath }, // Include image in the update
    { new: true }
  ).exec((err, blog) => {
    if (err) return res.status(400).json({ error: "Error updating the blog" });
    res.json(blog);
  });
};
