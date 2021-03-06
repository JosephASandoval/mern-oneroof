const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateExpenseInput(data) {
  let errors = {};

  data.body = validText(data.body) ? data.body : "";

  if (!Validator.isLength(data.body, { min: 5, max: 300 })) {
    errors.body = "Body must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Body field is required";
  }

  if (Validator.isEmpty(data.amount)) {
    errors.amount = "Amount field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};