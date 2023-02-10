#!/usr/bin/env node
// brain-even.js
import playGame from '../src/index.js';
import { randomIntFromInterval } from '../src/index.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const answerIsValid = (answer) => {
  return answer === ANSWER_YES || answer === ANSWER_NO;
}

const generateQuestion = () => {
  const value = randomIntFromInterval(1, 999);
  const rightAnswer = value % 2 === 0 ? ANSWER_YES : ANSWER_NO;
  return {
    expression: `${value}`,
    rightAnswer
  };
}

const gameName = 'Answer "yes" if the number is even, otherwise answer "no".';

function brainEven() {
  playGame(gameName, generateQuestion, answerIsValid);
};

brainEven();

export default brainEven;
