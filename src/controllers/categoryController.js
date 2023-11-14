const {
  createCategory,
  getCategories,
} = require('../services/categoryService');

const handleCreateCategory = async (req, res) => {
  try {
    const { name } = req.body;

    await createCategory(name);

    return res.status(200).send({
      message: `Category created successfully`,
    });
  } catch (error) {
    return res.status(400).send({
      message: `Failed to create category`,
      error: error.message,
    });
  }
};

const handleGetCategory = async (req, res) => {
  try {
    const categories = await getCategories();

    return res.status(200).send({
      message: `Categories fetched successfully`,
      categories: categories,
    });
  } catch (error) {
    return res.status(400).send({
      message: `Failed to fetch categories`,
      error: error.message,
    });
  }
};

module.exports = { handleCreateCategory, handleGetCategory };
