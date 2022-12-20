const { param } = require("express-validator");

// id validation
exports.idValidator = [
  param("id")
    .notEmpty()
    .withMessage("Character id is required")
    .custom(async (id) => {
      if (id && isNaN(id)) {
        throw "Id is numeric";
      }
    }),
];
