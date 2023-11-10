const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routers/categoryRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoryRouter);

app.get('/', (req, res) => res.send('Server is running fine! YaY!'));

module.exports = app;
