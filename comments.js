// create web server
// create a route that will accept a POST request to /comments
// when a POST request is made to /comments, the server should add the data from the request body to the comments array
// the server should send a response with a status of 201 and the updated comments array

// create a web server
const express = require("express");
const app = express();
// require the comments array
const { comments } = require("./data");

// parse incoming JSON data
app.use(express.json());

// create a route that will accept a POST request to /comments
app.post("/comments", (req, res) => {
  // add the data from the request body to the comments array
  comments.push(req.body);
  // send a response with a status of 201 and the updated comments array
  res.status(201).json(comments);
});

// listen on port 4001
app.listen(4001, () => {
  console.log("Server is listening on port 4001");
});
