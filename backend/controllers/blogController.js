const Blog = require('../models/blogModel');

//@desc   Get blogs
//@route  GET /api/blogs
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//@desc   Get blog
//@route  GET /api/blogs/:id
const getBlog = async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    res.status(200).json(blog);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

//@desc   Set blogs
//@route  POST /api/blogs
const setBlog = async (req, res) => {
  const blog = new Blog({ title: req.body.title, desc: req.body.desc });
  try {
    const newBlog = await blog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

//@desc   Update blogs
//@route  PUT /api/blogs/:id
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, desc } = req.body;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      id,
      { title, desc },
      { new: true }
    );
    if (!updateBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ message: `Server error ${err}` });
  }
};

//@desc   Set blogs
//@route  POST /api/blogs/:id
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    const blogs = await Blog.find();

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res
      .status(200)
      .json({ message: 'Blog deleted successfully', blogs: blogs });
  } catch (err) {
    res.status(500).json({ message: `Server error ${err}` });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
};
