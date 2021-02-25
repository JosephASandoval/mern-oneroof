const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateInvitationInput(data) {
  let errors = {};

  data.message = validText(data.message) ? data.message : "";

  if (!Validator.isLength(data.message, { min: 5, max: 300 })) {
    errors.message = "Invitation message must be between 5 and 300 characters";
  }

  if (Validator.isEmpty(data.message)) {
    errors.message = "Message field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
