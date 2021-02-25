const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateChoreInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";

  if (!Validator.isLength(data.body, { min: 5, max: 300 })) {
    errors.text = "Body must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.body)) {
    errors.text = "Body field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};