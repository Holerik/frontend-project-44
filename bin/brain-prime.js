#!/usr/bin/env node
// brain-prime.js
import playGame, { randomIntFromInterval } from '../src/index.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const answerIsValid = (answer) => answer === ANSWER_YES || answer === ANSWER_NO;

const getSimpleDivider = (value) => {
  let div = 1;
  do {
    div += 1;
  } while (div <= value && value % div !== 0);
  return div;
};

const getSimpleDividers = (value) => {
  const dividers = [];
  let div = 1;
  let val = value;
  while (div <= val) {
    dividers.push(div);
    div = getSimpleDivider(val);
    val /= div;
  }
  dividers.push(div);
  return dividers;
};

const generateQuestion = () => {
  const value = randomIntFromInterval(2, 300);
  const rightAnswer = getSimpleDividers(value).length > 2 ? ANSWER_NO : ANSWER_YES;
  return {
    expression: `${value}`,
    rightAnswer,
  };
};

const gameName = 'Answer "yes" if given number is prime. Otherwise answer "no"';

function brainPrime() {
  playGame(gameName, generateQuestion, answerIsValid);
}

brainPrime();

export default brainPrime;
