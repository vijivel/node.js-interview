const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 6000;

// Sample data (for demonstration purposes)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
];

// Middleware to parse incoming request bodies
app.use(bodyParser.json());

// GET all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET a specific user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);
    if (!user) {
        res.status(404).send('User not found');
    } else {
        res.json(user);
    }
});

// POST create a new user
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.status(201).json(newUser);
});

// PUT update an existing user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    let found = false;
    users = users.map(user => {
        if (user.id === userId) {
            found = true;
            return { ...user, ...updatedUser, id: userId };
        }
        return user;
    });
    if (found) {
        res.json(updatedUser);
    } else {
        res.status(404).send('User not found');
    }
});

// DELETE remove a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
