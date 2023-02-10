#!/usr/bin/env node
// brain-calc.js
import playGame from '../src/index.js';
import { randomIntFromInterval } from '../src/index.js';

const OP_ADD = '+';
const OP_MULT = '*';
const OP_SUBTR = '-';

const generateQuestion = () => {
  const operations = [OP_ADD, OP_MULT, OP_SUBTR];
  const opIndex = randomIntFromInterval(1, 3) - 1;
  let value1 = randomIntFromInterval(1, 75);
  const value2 = randomIntFromInterval(1, 9);
  if (opIndex === 3) {
    value1 = value2 * randomIntFromInterval(2, 9);
  }
  let rightAnswer = 0;
  switch (operations[opIndex]) {
    case OP_ADD:
      rightAnswer = `${value1 + value2}`;
      break;
    case OP_MULT:
      rightAnswer = `${value1 * value2}`;
      break;
    case OP_SUBTR:
      rightAnswer = `${value1 - value2}`;
      break;
  }
  return {
    expression: `${value1} ${operations[opIndex]} ${value2}`,
    rightAnswer
  };
}

const gameName = 'What is the result of the expression?';

const answerIsValid = (answer) => {
  return !isNaN(+answer);
}

function brainCalc()
{
  playGame(gameName, generateQuestion, answerIsValid);
};

brainCalc();

export default brainCalc;
