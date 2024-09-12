import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import NavBar from "./NavBar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { getToken, getUser } from "../services/authorize";

const FormComponent = () => {
  const [state, setState] = useState({
    title: "",
    author: getUser(),
  });

  const { title, author } = state;
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // For capturing the image file

  const inputValue = (name) => (event) => {
    setState({ ...state, [name]: event.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]); // Capture the selected image
  };

  const submitContent = (event) => {
    setContent(event);
  };

  const submitForm = (e) => {
    e.preventDefault();

    // Use FormData to send image and other data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("author", author);
    if (image) {
      formData.append("image", image); // Append image if selected
    }

    axios
      .post(`${process.env.REACT_APP_API}/create`, formData, {
        headers: {
          authorization: `Bearer ${getToken()}`,
          "Content-Type": "multipart/form-data", // Required for image uploads
        },
      })
      .then(() => {
        Swal.fire("Good job!", "Successfully added an article!", "success");
        setState({ ...state, title: "", author: getUser() });
        setContent("");
        setImage(null); // Reset image
      })
      .catch((err) => {
        Swal.fire("Oops...", err.response.data.error, "error");
      });
  };

  return (
    <>
      <NavBar />
    <div className="container p-7">
      <h1>Write an Article</h1>
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={inputValue("title")}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            type="file"
            className="form-control"
            onChange={handleImageChange} // Handle image selection
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <ReactQuill
            value={content}
            onChange={submitContent}
            theme="snow"
            className="pb-6 mb-3"
            placeholder="Write details of your article"
            style={{ border: "1px solid #666" }}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={inputValue("author")}
          />
        </div>
        <br />
        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </div>
    </>
  );
};

export default FormComponent;
