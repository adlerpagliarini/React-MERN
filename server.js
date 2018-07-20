const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/webconfig').mongoURI;

// Connect to Mongo
mongoose.connect(db) // return a promise
    .then(() => console.log('MongoDB Connected...'))
    .catch((err) => console.log('MongoDB Error', err));

const port = process.env.PORT || 5000;

// Use Routes
app.use('/api/items', items);

                 //callback
app.listen(port, () => console.log(`Server started on port ${port}`));
