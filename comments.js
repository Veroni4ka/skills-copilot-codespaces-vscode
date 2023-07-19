// Create web server
// Run: node comments.js
// Open browser to http://localhost:3000/

// Load the express module
var express = require('express');

// Create our express app
var app = express();

// Tell express where to look for static assets
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Set the default route
app.get('/', function(req, res) {
  res.render('default', {
    title: 'Home',
    classname: 'home',
    users: ['Peter', 'Paul', 'Mary']
  });
});

// Set the route for the about page
app.get('/about', function(req, res) {
  res.render('default', {
    title: 'About Us',
    classname: 'about'
  });
});

// Set the route for the contact page
app.get('/contact', function(req, res) {
  res.render('default', {
    title: 'Contact Us',
    classname: 'contact'
  });
});

// Set the route for the profile page
app.get('/profile/:name', function(req, res) {
  var name = req.params.name;
  res.render('profile', {
    title: 'Profile of ' + name,
    classname: 'profile',
    name: name
  });
});

// Start the server
app.listen(3000, function() {
  console.log('Server running on port 3000');
});