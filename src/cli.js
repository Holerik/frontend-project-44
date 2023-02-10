import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('brain-games\n');
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export default greetUser;
