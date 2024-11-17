// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json()); // Parses JSON data from requests
app.use(cors()); // Allows cross-origin requests from frontend (AngularJS)

// Sample Users Database (In-Memory)
const users = [];

// API endpoint for registration
app.post('/api/register', (req, res) => {
  const { name, email, phone, password } = req.body;

  // Basic validation
  if (!name || !email || !phone || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Check if email is already registered (mock user existence check)
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return res.status(400).json({ message: 'Email already registered.' });
  }

  // Save user data
  const newUser = { name, email, phone, password };
  users.push(newUser);

  // Send response
  res.status(200).json({ message: 'Registration successful!', user: newUser });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
