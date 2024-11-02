import React, { useContext } from 'react';
import '../styles/nav.css';
import { BlogContext } from '../context/BlogContext';
const Nav = () => {
  const { showForm, setShowForm } = useContext(BlogContext);
  return (
    <div className="nav-container">
      <h1>Blogify</h1>
      <div className="add-blog" onClick={() => setShowForm(!showForm)}>
        <h2>Add Blog</h2>
      </div>
    </div>
  );
};

export default Nav;
