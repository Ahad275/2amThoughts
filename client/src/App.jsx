import NavBar from "./components/NavBar";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { getToken, getUser } from "./services/authorize";
import svg from '../src/components/assest/twoAMthoughts.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowRight } from '@fortawesome/free-solid-svg-icons'; // Import right arrow icon
import { htmlToText } from 'html-to-text'; // Import html-to-text library
import './App.css'; // Import the CSS file

function App() {
  const [blogs, setBlogs] = useState([]);
  const [showScroll, setShowScroll] = useState(false);
  const [arrowClass, setArrowClass] = useState('visible'); // Manage side arrow visibility class
  const [topButtonClass, setTopButtonClass] = useState('hidden'); // Manage top button visibility class
  const blogRef = useRef(null); // Reference to the first blog

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then((response) => {
        setBlogs(response.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    fetchData();

    const handleScroll = () => {
      setShowScroll(window.pageYOffset > 300);
      setTopButtonClass(window.pageYOffset > 300 ? 'visible' : 'hidden'); // Update top button visibility based on scroll
      setArrowClass(window.pageYOffset > 300 ? 'hidden' : 'visible'); // Update side arrow visibility based on scroll
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check scroll position on initial load
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToFirstBlog = () => {
    if (blogRef.current) {
      blogRef.current.scrollIntoView({ behavior: 'smooth' });
      setArrowClass('hidden'); // Hide side arrow after clicking
    }
  };

  const confirmDelete = (slug) => {
    Swal.fire({
      title: "Are you sure to delete this article?",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBlog(slug);
      }
    });
  };

  const deleteBlog = (slug) => {
    axios
      .delete(`${process.env.REACT_APP_API}/blog/${slug}`, {
        headers: {
          authorization: `Bearer ${getToken()}`,
        },
      })
      .then((response) => {
        Swal.fire("Deleted!", response.data.message, "success");
        fetchData();
      })
      .catch((err) => console.log(err));
  };

  const extractText = (html) => {
    return htmlToText(html, {
      wordwrap: 130
    });
  };

  return (
    <div className="container p-7" style={{ height: "max-content" }}>
      <NavBar />
      <div className="svg-container">
        <img src={svg} alt="SVG Image" />
        <div className="svg-overlay"></div> {/* Ensure this div is present */}
      </div>

      {blogs.map((blog, index) => (
        <div
          id="my-story"
          className="row blog-row"
          key={index}
          ref={index === 0 ? blogRef : null} // Reference the first blog post
        >
          <div className="col pt-3 pb-2">
            <Link to={`/blog/${blog.slug}`}>
              <div className="blog-image-container">
                {blog.image && (
                  <img
                    src={`${process.env.REACT_APP_API.replace('/api', '')}/${blog.image}`}
                    alt={blog.title}
                    className="blog-image"
                  />
                )}
                <div className="blog-overlay-title">
                  <h2 className="title-padding">{blog.title}</h2>
                </div>
                <div className="blog-overlay-content">
                  <div className="overview">
                    {extractText(blog.content).substring(0, 400)}... {/* Short overview */}
                  </div>
                </div>
              </div>
            </Link>
            {getUser() && (
              <div>
                <Link
                  className="btn btn-outline-success"
                  to={`/blog/edit/${blog.slug}`}
                >
                  Edit
                </Link>{" "}
                &nbsp;
                <button
                  className="btn btn-outline-danger"
                  onClick={() => confirmDelete(blog.slug)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ))}

      {/* Back to Top Button */}
      <button 
        onClick={scrollToTop} 
        className={`back-to-top ${topButtonClass}`} // Apply visibility class
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>

      {/* Side Arrow to First Blog */}
      {blogs.length > 0 && (
        <button
          onClick={scrollToFirstBlog}
          className={`side-arrow ${arrowClass}`} // Apply visibility class
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      )}
    </div>
  );
}

export default App;
