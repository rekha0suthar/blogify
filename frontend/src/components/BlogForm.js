import React, { useContext, useEffect } from 'react';
import '../styles/blog-form.css';
import { BlogContext } from '../context/BlogContext';
import axios from 'axios';
const BlogForm = () => {
  const { blogs, setBlogs, title, setTitle, desc, setDesc, setShowForm } =
    useContext(BlogContext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:5000/api/blogs/',
        { title, desc },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      setBlogs([...blogs, response.data]);
      setTitle('');
      setDesc('');
      setShowForm(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTitle('');
    setDesc('');
  }, []);
  return (
    <div className="blog-form">
      <h2>Add Blog</h2>
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
  );
};

export default BlogForm;
