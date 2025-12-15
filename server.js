const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to Reskill API! (local)' });
});

app.listen(PORT, () => {
  console.log(`Reskill local server running at http://localhost:${PORT}`);
});