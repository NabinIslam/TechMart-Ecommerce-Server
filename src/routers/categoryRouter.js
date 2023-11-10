const express = require('express');
const {
  handleCreateCategory,
  handleGetCategory,
} = require('../controllers/categoryController');

const categoryRouter = express.Router();

categoryRouter.post('/', handleCreateCategory).get('/', handleGetCategory);

module.exports = categoryRouter;
