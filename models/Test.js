const mongoose = require("mongoose");

const testSchema = mongoose.Schema(
  {
    user_id: { type: String, default: null },
    responses: [
      { _id: false, question_id: String, response: String, group: Number },
    ],
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Test", testSchema);
