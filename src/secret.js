require('dotenv').config();

const port = process.env.PORT || 8000;
const mongodbUri = process.env.MONGODB_URI;
const uploadDir = process.env.UPLOAD_DIRECTORY;
const allowedFileTypes = process.env.ALLOWED_FILE_TYPES;

module.exports = {
  port,
  mongodbUri,
  uploadDir,
  allowedFileTypes,
};
