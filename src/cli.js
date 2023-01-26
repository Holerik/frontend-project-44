import readlineSync from 'readline-sync';

const greetUser = () => {
  const user = readlineSync.question('May I have your name? ');
  console.log('Hello, ', user);
}

export default greetUser;
