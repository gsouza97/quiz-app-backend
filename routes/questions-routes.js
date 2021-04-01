const express = require("express");

const questionsControllers = require("../controllers/questions-controllers");

const router = express.Router();

router.get("/", questionsControllers.getQuestions);

module.exports = router;
