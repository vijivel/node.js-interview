const express = require('express');
const app = express();
const port = 4000;

// Custom middleware function to log request details
function loggerMiddleware(req, res, next) {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in the stack
}

// Register the logger middleware
app.use(loggerMiddleware);

// Route handlers
app.get('/', (req, res) => {
    res.send('Hello, this is a GET request!');
});

app.post('/', (req, res) => {
    res.send('Hello, this is a POST request!');
});

// Starting the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
