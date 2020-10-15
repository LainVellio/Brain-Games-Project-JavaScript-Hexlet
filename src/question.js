import promptly from 'promptly';
import checkEven from './isEven.js';

export default async () => {
  console.log('Welcome to the Brain Games');
  const name = await promptly.prompt('May I have your name? ', { silent: true });
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const numQuestion = (Math.random() * 100).toFixed(0);
    const rightAnswer = checkEven(numQuestion);
    console.log(`Question: ${numQuestion}`);
    // eslint-disable-next-line no-await-in-loop
    const inputAnswer = await promptly.prompt('Your answer: ');
    if (rightAnswer === inputAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${inputAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
