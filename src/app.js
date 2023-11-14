const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routers/categoryRouter');
const productRouter = require('./routers/productRouter');
const brandRouter = require('./routers/brandRouter');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/brands', brandRouter);

app.get('/', (req, res) => res.send('Server is running fine! YaY!'));

module.exports = app;
