const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const questionsRoutes = require("../routes/questions-routes");

const app = express();

app.use(bodyParser);

app.use("api/questions/", questionsRoutes);

mongoose
  .connect(
    "mongodb+srv://binho:lsY9j9dQoJ3QJ9W9@cluster0.6c0dg.mongodb.net/Quiz?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
