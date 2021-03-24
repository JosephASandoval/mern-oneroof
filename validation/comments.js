const validText = require("./valid-text");
const Validator = require("validator");

module.exports = function validateCommentInput(data) {
  let errors = {};

  // CHECK IF DATA IS A VALID STRING
  data.authorId = validText(data.authorId) ? data.authorId : "";
  data.taskId = validText(data.taskId) ? data.taskId : "";
  data.body = validText(data.body) ? data.body : "";

  // CHECK IF DATA IS EMPTY

  if (Validator.isEmpty(data.authorId)) {
    errors.authorId = "Author Id is required";
  }

  if (Validator.isEmpty(data.taskId)) {
    errors.taskId = "Task Id is required";
  }

  if (Validator.isEmpty(data.body)) {
    errors.body = "Body is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
