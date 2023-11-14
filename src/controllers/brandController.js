const { createBrand, getBrands } = require('../services/brandService');

const handleCreateBrand = async (req, res) => {
  try {
    const { name } = req.body;

    const brand = await createBrand(name);

    return res.status(200).send({
      message: `Brand created successfully`,
      payload: brand,
    });
  } catch (error) {
    return res.status(400).send({
      message: `Failed to create brand`,
      error: error.message,
    });
  }
};

const handleGetBrand = async (req, res) => {
  try {
    const brands = await getBrands();

    return res.status(200).send({
      message: `Brands fetched successfully`,
      brands: brands,
    });
  } catch (error) {
    return res.status(400).send({
      message: `Failed to fetch brands`,
      error: error.message,
    });
  }
};

module.exports = { handleCreateBrand, handleGetBrand };
