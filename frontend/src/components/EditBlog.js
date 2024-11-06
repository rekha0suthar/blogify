import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import axios from 'axios';
import '../styles/edit-blog.css';
const EditBlog = () => {
  const { setBlogs, title, setTitle, desc, setDesc, setEditBlog, blogId } =
    useContext(BlogContext);
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://blogify-backend-rho.vercel.app/api/blogs/${blogId}`
        );
        setTitle(response.data.title);
        setDesc(response.data.desc);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlog();
  }, [blogId, setTitle, setDesc]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://blogify-backend-rho.vercel.app/api/blogs/${blogId}`,
        { title, desc },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setBlogs(response.data);
      setEditBlog(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="overlay" onClick={() => setEditBlog(false)}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <span className="popup-close" onClick={() => setEditBlog(false)}>
          &times;
        </span>
        <h2>Edit Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <br />
          <input
            type="text"
            placeholder="Enter blog title ...."
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          <label>Description</label>
          <br />
          <textarea
            placeholder="Enter blog description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EditBlog;
