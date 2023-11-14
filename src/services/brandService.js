const slugify = require('slugify');
const Brand = require('../models/brandModel');

const createBrand = async name => {
  const newBrand = await Brand.create({
    name: name,
    slug: slugify(name),
  });

  return newBrand;
};

const getBrands = async () => {
  const categories = await Brand.find({});

  return categories;
};

module.exports = { createBrand, getBrands };
