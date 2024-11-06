import React, { useContext } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import '../styles/blog.css';
import axios from 'axios';
import { BlogContext } from '../context/BlogContext';

const Blog = ({ blog }) => {
  const { setBlogs, setEditBlog, setBlogId } = useContext(BlogContext);
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `https://blogify-backend-rho.vercel.app/api/blogs/${id}`
      );
      setBlogs(response.data.blogs);
    } catch (err) {
      console.log(err);
    }
  };
  const handleEdit = (id) => {
    setEditBlog(true);
    setBlogId(id);
  };
  // Format updatedAt
  const formattedDate = new Date(blog.updatedAt).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });
  return (
    <>
      <div key={blog._id} className="blog-post">
        <div>
          <h2>{blog.title}</h2>
          <p>{blog.desc}</p>
          <p>{formattedDate}</p>
        </div>
        <div className="btns">
          <button className="edit-btn" onClick={() => handleEdit(blog._id)}>
            <MdEdit />
          </button>
          <button className="delete-btn" onClick={() => handleDelete(blog._id)}>
            <MdDelete />
          </button>
        </div>
      </div>
    </>
  );
};

export default Blog;
