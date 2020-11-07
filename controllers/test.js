const Test = require("../models/Test");

exports.createTest = (req, res, next) => {
  const test = new Test({
    ...req.body,
  });
  test
    .save()
    .then((questions) => {
      res.status(200).json(questions);
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
      });
    });
};

exports.pushReponse = (req, res, next) => {
  Test.updateOne(
    { _id: req.params.id },
    {
      $addToSet: {
        responses: [
          {
            question_id: req.body.question_id,
            response: req.body.response,
            group: req.body.group,
          },
        ],
      },
    }
  )
    .then(() => {
      res.status(201).json({
        message: "Test updated successfully!",
      });
    })
    .catch((error) => {
      console.log(res);
      console.log("err" + error);
      res.status(400).json({
        error: error,
      });
    });
};
