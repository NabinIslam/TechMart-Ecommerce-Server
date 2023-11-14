const multer = require('multer');
const { ALLOWED_FILE_TYPES } = require('../config');

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (!file.mimetype.startsWith('image/'))
    return cb(new Error('Only image files are allowed'), false);

  if (!ALLOWED_FILE_TYPES.includes(file.mimetype))
    return cb(new Error('File type is not allowed'), false);

  cb(null, true);
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
});

module.exports = upload;

// const multer = require('multer');
// const path = require('path');
// const { uploadDir } = require('../secret');

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, uploadDir);
//   },
//   filename: function (req, file, cb) {
//     const extensionName = path.extname(file.originalname);
//     cb(
//       null,
//       Date.now() +
//         '-' +
//         file.originalname.replace(extensionName, '') +
//         extensionName
//     );
//   },
// });

// const upload = multer({ storage: storage });

// module.exports = upload;
