import React, { useContext, useEffect } from 'react';
import { BlogContext } from '../context/BlogContext';
import axios from 'axios';
import '../styles/blog-list.css';
import Blog from './Blog';
import EditBlog from './EditBlog';

const BlogList = () => {
  const { blogs, setBlogs, editBlog } = useContext(BlogContext);
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          'https://blogify-backend-rho.vercel.app/api/blogs/'
        );
        setBlogs(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBlogs();
  }, [setBlogs]);
  return (
    <>
      <div className="blog-container">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog._id} />
        ))}
      </div>
      {editBlog && <EditBlog />}
    </>
  );
};

export default BlogList;
