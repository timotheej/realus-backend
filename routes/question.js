const express = require("express");
const router = express.Router();

const questionCtrl = require("../controllers/question");

router.get("/", questionCtrl.getAllQuestions);

module.exports = router;
