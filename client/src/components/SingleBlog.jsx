import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "./NavBar";
import "./SingleBlog.css"; // Importing the corresponding CSS

const SingleBlog = () => {
  const [blog, setBlog] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API}/blog/${slug}`)
      .then((response) => {
        setBlog(response.data);
      })
      .catch((err) => alert(err));
  }, [slug]);

  // Determine the image URL
  const imageUrl = blog && blog.image ? `${process.env.REACT_APP_API}/uploads/${blog.image}` : null;

  return (
    <div className="single-blog-container">
      <NavBar />
      {blog ? (
        <div className="blog-content">
          <h1 className="blog-title">{blog.title}</h1>
          {imageUrl && (
             <img
             src={`${process.env.REACT_APP_API.replace('/api', '')}/${blog.image}`}
             alt={blog.title}
             className="blog-image"
           />
          )}
          <div
            className="blog-text"
            dangerouslySetInnerHTML={{
              __html: blog.content,
            }}
          />
          <p className="blog-author text-muted">
            Author: {blog.author}, Created at {new Date(blog.createdAt).toLocaleString()}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleBlog;
