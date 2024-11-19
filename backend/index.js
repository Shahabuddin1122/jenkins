const express = require("express");
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Simple GET route
app.get("/", (req, res) => {
  res.send("Welcome to the Simple Node.js API!");
});

// Example POST route
app.post("/data", (req, res) => {
  const { name, age } = req.body;
  res.json({ message: `Hello, ${name}! You are ${age} years old.` });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
