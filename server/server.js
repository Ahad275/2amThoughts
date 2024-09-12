const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path'); // Add this line to import the path module
require('dotenv').config();

const blogRoute = require('./routes/blog');
const authRoute = require('./routes/auth');

const app = express();

// Connect to cloud database
const connectDB = process.env.DATABASE;
mongoose
  .connect(connectDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connect success'))
  .catch(() => console.log('connect error'));

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Routes
app.use('/api', blogRoute);
app.use('/api', authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
