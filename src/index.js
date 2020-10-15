import promptly from 'promptly';

export default async (rightAnswer) => {
  console.log('Welcome to the Brain Games');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rightAnswer[0]);
  for (let i = 1; i < 4; i += 1) {
    console.log(`Question: ${rightAnswer[i]}`);
    // eslint-disable-next-line no-await-in-loop
    const inputAnswer = await promptly.prompt('Your answer: ');
    if (rightAnswer[i + 3] === inputAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${inputAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer[i + 3]}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
