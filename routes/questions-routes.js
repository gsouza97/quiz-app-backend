const express = require("express");

const questionsControllers = require("../controllers/questions-controllers");

const router = express.Router();

router.get("/", questionsControllers.getQuestions);
router.post("/", questionsControllers.createQuestion);
router.delete("/:qid", questionsControllers.deleteQuestion);

module.exports = router;
