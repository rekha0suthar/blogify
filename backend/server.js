const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');
const blogRouter = require('./routes/blogRoutes');
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/blogs', blogRouter);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

app.listen(port, () => `Server is running on port ${port}`);
