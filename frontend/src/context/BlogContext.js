import React, { useState } from 'react';

const BlogContext = React.createContext({});

const BlogContextProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editBlog, setEditBlog] = useState(false);
  const [blogId, setBlogId] = useState(null);

  return (
    <BlogContext.Provider
      value={{
        blogs,
        setBlogs,
        title,
        setTitle,
        desc,
        setDesc,
        showForm,
        setShowForm,
        editBlog,
        setEditBlog,
        blogId,
        setBlogId,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogContextProvider };
