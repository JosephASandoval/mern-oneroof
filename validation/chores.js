const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateChoreInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";

  data.priority = validText(data.priority) ? data.priority : "";

  if (!Validator.isLength(data.body, { min: 5, max: 300 })) {
    errors.body = "Body must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Body field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};