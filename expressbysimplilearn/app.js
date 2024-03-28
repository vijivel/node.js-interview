const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// GET request handler
app.get('/', (req, res) => {
    res.send('Hello, this is a GET request!');
});

// POST request handler
app.post('/', (req, res) => {
    const data = req.body;
    res.send(`Hello, this is a POST request! Received data: ${JSON.stringify(data)}`);
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
