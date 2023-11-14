const express = require('express');
const {
  handleCreateProduct,
  handleGetProducts,
} = require('../controllers/productController');
const upload = require('../middlewares/uploadFile');

const productRouter = express.Router();

productRouter
  .post('/', upload.single('image'), handleCreateProduct)
  .get('/', handleGetProducts);

module.exports = productRouter;
