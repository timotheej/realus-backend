const Question = require("../models/Question");

exports.getAllQuestions = (req, res, next) => {
  Question.find()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};
