let DUMMY = [
  {
    id: "q1",
    question: "qual a sua cor preferida",
    option1: "Azul",
    option1: "Amarelo",
    option1: "Vermelho",
    option1: "Larajna",
    answer: 2,
  },
];

const getQuestions = (req, res, next) => {
  let questions;
  try {
    questions = DUMMY.find();
  } catch (err) {}
  res.json('linda');
};

//const postQuestion = async(req, res);

exports.getQuestions = getQuestions;
