#!/usr/bin/env node
// brain-progression.js
import playGame, { randomIntFromInterval } from '../src/index.js';

const generateQuestion = () => {
  const firstNumber = randomIntFromInterval(1, 15);
  const progressionLength = randomIntFromInterval(5, 14);
  const progressionStep = randomIntFromInterval(1, 4);
  const hiddenIndex = randomIntFromInterval(1, progressionLength) - 1;
  let expression = '';
  for (let index = 0; index < progressionLength; index += 1) {
    if (index > 0) {
      expression += ' ';
    }
    if (index !== hiddenIndex) {
      expression += `${firstNumber + index * progressionStep}`;
    } else {
      expression += '..';
    }
  }
  return {
    expression,
    rightAnswer: `${firstNumber + hiddenIndex * progressionStep}`,
  };
};

const gameName = 'What number is missing in the progression?';

const answerIsValid = (answer) => !isNaN(+answer);

function brainProgression() {
  playGame(gameName, generateQuestion, answerIsValid);
}

brainProgression();

export default brainProgression;
