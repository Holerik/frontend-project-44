// brain-even.js
import readlineSync from 'readline-sync';

const testAnswer = (num) => {
  const answer = readlineSync.prompt({ prompt: `Question: ${num}: ` });
  const rightAnswer = num % 2 === 0 ? 'yes' : 'no';
  return {
    result: answer === 'yes' || answer === 'no' ? rightAnswer === answer : false,
    answer,
    rightAnswer,
  };
}

function brainEven() {
  console.log('brain-even\n\n');
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const testNumbers = [15, 6, 7];
  let i;
  for (i = 0; i < testNumbers.length; i += 1) {
    let test = testAnswer(testNumbers[i]);
    if (test.result === true) {
      console.log('Correct!');
    } else {
      let str = `'${test.answer}' is wrong answer ;(.`;
      if (test.answer === 'yes' || test.answer === 'no') {
        str += ` Correct answer was '${test.rightAnswer}'`;
      }
      console.log(str);
      break;
    }
  }
  if (i < testNumbers.length) {
    console.log(`Let's try again, ${user}!`);
  } else {
    console.log(`Congratulations, ${user}!`);
  }
}

brainEven();
