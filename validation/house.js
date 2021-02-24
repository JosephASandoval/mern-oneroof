const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateHouseInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";

  if (!Validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "House name must be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "House name field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
