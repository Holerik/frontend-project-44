// index.js
import readlineSync from 'readline-sync';
import greetUser from './cli.js';

const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let user = '';

const beginGame = (gameName) => {
  user = greetUser();
  console.log(gameName);
};

const finishGame = (res) => {
  if (res) {
    console.log(`Let's try again, ${user}!`);
  } else {
    console.log(`Congratulations, ${user}!`);
  }
};

const checkAnswer = (answer, rightAnswer, isValid) => {
  if (answer === rightAnswer) {
    return {
      msg: 'Correct!',
      res: true,
    };
  } 
  let str = `'${answer}' is wrong answer ;(.`;
  if (isValid(answer)) {
    str += ` Correct answer was '${rightAnswer}'.`;
  }
  return {
    msg: str,
    res: false,
  };
};

function playGame(gameName, generateQuestion, answerValidation) {
  const questionsCount = 3;
  let questionNumber = 0;
  beginGame(gameName);
  for (questionNumber = 0; questionNumber < questionsCount; questionNumber += 1) {
    const question = generateQuestion();
    const answer = readlineSync.prompt({ prompt: `Question: ${question.expression}\nYour answer: ` });
    const check = checkAnswer(answer, question.rightAnswer, answerValidation);
    console.log(check.msg);
    if (!check.res) {
      break;
    }
  }
  finishGame(questionNumber < questionsCount);
}

export default playGame;
export { randomIntFromInterval };
