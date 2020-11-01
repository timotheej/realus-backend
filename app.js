const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const questionRoutes = require("./routes/question");

mongoose
  .connect("mongodb://localhost:27017/realus", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// questions routes
app.use("/q/", questionRoutes);

module.exports = app;
