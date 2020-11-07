const express = require("express");
const router = express.Router();

const testCtrl = require("../controllers/test");

router.post("/createTest", testCtrl.createTest);
router.put("/pushResponse/:id", testCtrl.pushReponse);

module.exports = router;
