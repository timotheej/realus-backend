const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({});

module.exports = mongoose.model("Question", questionSchema);
