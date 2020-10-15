import promptly from 'promptly';
import { checkEven } from './utils.js';
import cli from './cli.js';

export default async () => {
  const name = await cli();

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
      console.log(
        `'${inputAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
