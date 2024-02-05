const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// Sample data for /post/all
const posts = [
  { id: 1, name: 'dhia', lastname: 'tarchoun' },
  { id: 2, name: 'dhaw', lastname: 'dhaw' },
  // Add more posts as needed
];

// Route for /auth/login
app.get('/auth/login', (req, res) => {

  // Send the login.html file
  res.sendFile(path.join(__dirname + '/login.html'));
});

// Route for /auth/register
app.get('/auth/register', (req, res) => {
    
  // Send the register.html file
  res.sendFile(path.join(__dirname + '/register.html'));
});

// Route for /post/all
app.get('/post/all', (req, res) => {
  // Return the array of posts as JSON
  res.json(posts);
});

// Route for /post/:id
app.get('/post/:id', (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find(post => post.id === postId);

  if (post) {
    res.json(post);
  } else {
    res.status(404).send('Post not found');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
