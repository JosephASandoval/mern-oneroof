const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateChoreInput(data) {
  let errors = {};

  data.text = validText(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 5, max: 300 })) {
    errors.text = "Text must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.text)) {
    errors.text = "Text field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};