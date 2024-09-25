// Create Web Server
const express = require('express');
const app = express();
const port = 3000;

// Create a route
app.get('/comments', (req, res) => {
    res.send('Comments');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// In comments.js, we have created a simple web server that listens on port 3000. When a request is made to http://localhost:3000/comments, the server responds with the text "Comments". This is a simple example of how to create a route in Express and send a response back to the client.