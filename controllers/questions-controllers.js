const Question = require("../models/question");

const getQuestions = async (req, res, next) => {
  let questions;
  try {
    questions = await Question.find();
  } catch (err) {}
  res.json({
    questions: questions.map((question) =>
      question.toObject({ getters: true })
    ),
  });
};

const createQuestion = async (req, res, next) => {
  const { question, option1, option2, option3, option4, answer } = req.body;

  const createdQuestion = new Question({
    question: question,
    option1: option1,
    option2: option2,
    option3: option3,
    option4: option4,
    answerIndex: answer,
  });

  try {
    await createdQuestion.save();
  } catch (err) {}

  res.status(201).json({ question: createdQuestion });
};

exports.getQuestions = getQuestions;
exports.createQuestion = createQuestion;
