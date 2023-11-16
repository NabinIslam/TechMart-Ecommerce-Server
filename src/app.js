const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routers/categoryRouter');
const productRouter = require('./routers/productRouter');
const brandRouter = require('./routers/brandRouter');

const app = express();

app.use(express.json());
app.use('/public', express.static('public'));
app.use(cors());

app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/brands', brandRouter);

app.get('/', (req, res) =>
  res.send(`<h1><center>TechMart server is running fine!</center></h1>`)
);

module.exports = app;
