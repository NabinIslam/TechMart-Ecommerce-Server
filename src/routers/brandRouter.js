const express = require('express');
const {
  handleCreateBrand,
  handleGetBrand,
} = require('../controllers/brandController');

const brandRouter = express.Router();

brandRouter.post('/', handleCreateBrand).get('/', handleGetBrand);

module.exports = brandRouter;
