const validText = require("./valid-text");
const Validator = require("validator");

module.exports = function validateCompleteInput(data) {
  let errors = {};

  // CHECK IF DATA IS A VALID STRING_DECODER
  data.completerId = validText(data.completerId) ? data.completerId : "";
  data.taskId = validText(data.taskId) ? data.taskId : "";

  // CHECK IF THE DATA IS EMPTY

  if (Validator.isEmpty(data.completerId)) {
    errors.completerId = "Author Id is required";
  }

  if (Validator.isEmpty(data.taskId)) {
    errors.taskId = "Task Id is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
