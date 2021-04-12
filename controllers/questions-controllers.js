const HttpError = require("../models/http-error");
const Question = require("../models/question");

const getQuestions = async (req, res, next) => {
  let questions;

  try {
    questions = await Question.find();
  } catch (err) {
    const error = new HttpError(
      "Something went wrong. Could not find any question.",
      500
    );
    return next(error);
  }

  if (!questions) {
    return next(new HttpError("Could not find any question.", 404));
  }

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
  } catch (err) {
    const error = new HttpError(
      "Could not create question. Please, try again.",
      500
    );
    return next(error);
  }
  res.status(201).json({ question: createdQuestion });
};

const deleteQuestion = async (req, res, next) => {
  const questionId = req.params.qid;

  let question;

  try {
    question = await Question.findById(questionId);
  } catch (err) {
    const error = new HttpError("Could not delete question. Try again.", 500);
    return next(error);
  }

  if (!question) {
    return next(
      new HttpError("Could not find a question for the provided id.", 404)
    );
  }

  try {
    await Question.remove(question);
  } catch (err) {
    const error = new HttpError("Could not delete question. Try again.", 500);
    return next(error);
  }

  res.status(200).json({ message: "Deleted question." });
};

exports.getQuestions = getQuestions;
exports.createQuestion = createQuestion;
exports.deleteQuestion = deleteQuestion;
