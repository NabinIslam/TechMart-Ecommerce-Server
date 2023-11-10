const mongoose = require('mongoose');
const { mongodbUri } = require('../secret');



const connectDB = async () => {
  try {
    await mongoose.connect(mongodbUri);
    console.log('Database connection established');

    mongoose.connection.on('error', err =>
      console.error(`DB connection error: ${err}`)
    );
  } catch (error) {
    console.error(`Could not connect to MongoDB: ${error}`);
  }
};

module.exports = { connectDB };
