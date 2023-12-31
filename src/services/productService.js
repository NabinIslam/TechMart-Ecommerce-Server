const slugify = require('slugify');
const Product = require('../models/productModel');

const createProduct = async productData => {
  const { name, price, image, status, category, brand } = productData;

  const productExists = await Product.exists({ name: name });

  if (productExists) {
    throw Error(409, 'Product with this name already exist.');
  }

  const product = await Product.create({
    name,
    slug: slugify(name),
    price,
    image: `https://techmart-nwa5.onrender.com/public/images/products/${image.filename}`,
    status,
    category,
    brand,
  });

  return product;
};

const getAllProducts = async () => {
  const products = await Product.find({})
    .populate('category')
    .populate('brand');

  return products;
};

module.exports = { createProduct, getAllProducts };
