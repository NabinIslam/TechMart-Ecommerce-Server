const { createProduct, getAllProducts } = require('../services/productService');

const handleCreateProduct = async (req, res) => {
  try {
    const { name, price, status, category, brand } = req.body;

    const image = req.file;

    const imageBufferString = image.buffer.toString('base64');

    const productData = {
      name,
      price,
      imageBufferString,
      status,
      category,
      brand,
    };

    const product = await createProduct(productData);

    return res.status(200).send({
      message: `Product created successfully`,
      payload: product,
    });
  } catch (error) {
    return res.status(400).send({
      message: `Couldn't create the product`,
      error: error.message,
    });
  }
};

const handleGetProducts = async (req, res) => {
  try {
    const products = await getAllProducts();

    return res.status(200).send({
      message: `Products fetched successfully`,
      products: products,
    });
  } catch (error) {
    return res.status(400).send({
      message: `Failed to fetch products`,
      error: error.message,
    });
  }
};

module.exports = { handleCreateProduct, handleGetProducts };
