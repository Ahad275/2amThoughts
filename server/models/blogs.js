// models/blogs.js

const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Store image file path
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blogs", blogSchema);
