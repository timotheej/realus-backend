const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
  title: { type: String, required: true },
});

module.exports = mongoose.model("Question", questionSchema);
