const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 300;

// Enable parsing of application/json
app.use(bodyParser.json());

// Enable parsing of application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Define a list of users
let users = [
  {
    name: 'Akash Choudhary',
    email: 'Akash.doe@example.com',
    age: 30,
    city: 'New York',
    profession: 'Software Engineer'
  },
  {
    name: 'Vikas Doe',
    email: 'vikas.doe@example.com',
    age: 25,
    city: 'San Francisco',
    profession: 'Web Developer'
  }
];

// Define a route to render the list of users
app.get('/', (req, res) => {
  res.render('index', { users });
});

app.get('/user/add', (req, res) => {
  res.render('add-user');
});

// Define a route to handle the form submission
app.post('/user/add', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});