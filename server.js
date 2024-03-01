const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve static files from the 'Inequilazitive.github.io' directory
app.use(express.static(path.join(__dirname)));

// Serve static files from the 'css' directory
app.use('/css', express.static(path.join(__dirname, 'css')));

// Handle requests to the root URL
app.get('/', (req, res) => {
  // Send the 'index.html' file when someone accesses the root URL
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
