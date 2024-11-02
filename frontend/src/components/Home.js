import React, { useContext } from 'react';
import Nav from './Nav';
import BlogList from './BlogList';
import BlogForm from './BlogForm';
import { BlogContext } from '../context/BlogContext';

const Home = () => {
  const { showForm } = useContext(BlogContext);

  return (
    <div>
      <Nav />
      {!showForm ? <BlogList /> : <BlogForm />}
    </div>
  );
};

export default Home;
