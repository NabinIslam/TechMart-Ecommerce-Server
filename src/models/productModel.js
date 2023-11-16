const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      unique: true,
      minlength: [3, 'Product name must be at least 3 characters'],
    },
    slug: {
      type: String,
      required: [true, 'Product slug required'],
      lowercase: true,
      unique: true,
    },
    image: {
      type: String,
      required: [true, 'Product image is required'],
    },
    price: {
      type: Number,
      required: [true, 'Product price is required'],
      trim: true,
      validate: {
        validator: v => v > 0,
        message: props =>
          `${props.value} is not a valid price! Price must be greater than 0`,
      },
    },
    status: {
      type: String,
      required: [true, 'Product status is required'],
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: 'Brand',
      required: true,
    },
  },
  { timestamps: true }
);

const Product = model('Product', productSchema);

module.exports = Product;
