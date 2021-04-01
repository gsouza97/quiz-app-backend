const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.use(bodyParser);

mongoose
  .connect()
  .then(() => {
    app.listen(4000);
  })
  .catch((err) => {
    console.log(err);
  });
