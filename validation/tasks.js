const validText = require("./valid-text");
const Validator = require("validator");

module.exports = function validateTaskInput(data) {
  let errors = {};

  //VALID TEXT
  data.authorId = validText(data.authorId) ? data.authorId : "";
  data.name = validText(data.name) ? data.name : "";
  data.tip = validText(data.tip) ? data.tip : "";
  data.workTime = validText(data.workTime) ? data.workTime : "";
  data.difficulty = validText(data.difficulty) ? data.difficulty : "";
  data.category = validText(data.category) ? data.category : "";
  data.numCompletes = validText(data.numCompletes) ? data.numCompletes : "";
  data.photoUrl = validText(data.photoUrl) ? data.photoUrl : "";
  data.photoId = validText(data.photoId) ? data.photoId : "";

  //CHECK IF THE DATA IS EMPTY

  if (data.instructions.length === 0) {
    errors.instructions = "Instructions are required";
  } else if (data.instructions.length > 0 && data.instructions === "") {
    errors.instructions = "Invalid input";
  }

  if (Validator.isEmpty(data.authorId)) {
    errors.authorId = "Author Id is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Task name is required";
  }

  if (Validator.isEmpty(data.tip)) {
    errors.tip = "Task tip is required";
  }

  if (Validator.isEmpty(data.workTime)) {
    errors.workTime = "Work Time is required";
  }

  if (Validator.isEmpty(data.difficulty)) {
    errors.difficulty = "Difficulty is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category is required";
  }

  if (Validator.isEmpty(data.photoUrl)) {
    errors.photoUrl = "PhotoUrl is required";
  }

  if (Validator.isEmpty(data.photoId)) {
    errors.photoId = "PhotoId is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
