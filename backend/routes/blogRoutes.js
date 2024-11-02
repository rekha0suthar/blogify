const express = require('express');
const {
  getBlogs,
  setBlog,
  updateBlog,
  deleteBlog,
  getBlog,
} = require('../controllers/blogController');
const router = express.Router();

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', setBlog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

module.exports = router;
