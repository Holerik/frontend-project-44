#!/usr/bin/env node
// brain-gcd.js
import playGame, { randomIntFromInterval } from '../src/index.js';

const gameName = 'Find the greatest common divisor of given numbers.';

const answerIsValid = (answer) => !Number.isNaN(+answer);

const generateQuestion = () => {
  const value1 = randomIntFromInterval(1, 75);
  const value2 = randomIntFromInterval(1, 25);
  let max = value1 > value2 ? value1 : value2;
  let min = value1 > value2 ? value2 : value1;
  let res = max % min;
  while (res > 0) {
    max = min;
    min = res;
    res = max % min;
  }
  const rightAnswer = `${min}`;
  return {
    expression: `${value1} ${value2}`,
    rightAnswer,
  };
};

function brainGcd() {
  playGame(gameName, generateQuestion, answerIsValid);
}

brainGcd();

export default brainGcd;
