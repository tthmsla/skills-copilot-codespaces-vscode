// Create Web Server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST /comments
app.post('/comments', (req, res) => {
    const { content } = req.body;
    if (!content) {
        return res.status(400).json({ message: 'content is required' });
    }

    const newComment = comments.create(content);
    res.status(201).json(newComment);
});

// GET /comments
app.get('/comments', (req, res) => {
    const allComments = comments.getAll();
    res.json(allComments);
});

// GET /comments/:id
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const theComment = comments.getOne(id);
    if (!theComment) {
        return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(theComment);
});

// PUT /comments/:id
app.put('/comments/:id', (req, res) => {
    const { id } = req.params;
    const { content } = req.body;
    const updatedComment = comments.update(id, content);
    if (!updatedComment) {
        return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(updatedComment);
});

// DELETE /comments/:id
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    const deletedComment = comments.remove(id);
    if (!deletedComment) {
        return res.status(404).json({ message: 'Comment not found' });
    }

    res.json(deletedComment);
});

// Start Web Server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});