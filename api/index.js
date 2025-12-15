const express = require('express');
const serverless = require('serverless-http');

const app = express();

// Serve static files from /public
app.use(express.static('public'));

// Basic API route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Reskill API!' });
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);

