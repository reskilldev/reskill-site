const express = require('express');
const path = require('path');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Basic routes
app.get('/', (req, res) => {
  res.render('pages/index', { title: 'Reskill — Home' });
});

app.get('/programs', (req, res) => {
  res.render('pages/programs', { title: 'Reskill — Explore Programs' });
});

app.get('/about', (req, res) => {
  res.render('pages/about', { title: 'Reskill — About' });
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', { title: 'Reskill — Contact' });
});

// Server start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Reskill site running on http://localhost:${PORT}`);
});