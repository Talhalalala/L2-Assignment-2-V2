const express = require('express');
const cors = require('cors');

const server = express();
server.use(cors());
server.use(express.json());

const postRoutes = require('./routes/posts')
server.use('/books', booksRoutes)

server.get('/', (req, res) => res.send('Welcome to the Blog'))

module.exports = server