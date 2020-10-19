import promptly from 'promptly';

export const launchGame = async (rules, getNextQuestion, numQuestion = 3) => {
  console.log('Welcome to the Brain Games');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < numQuestion; i += 1) {
    const { question, answer } = getNextQuestion();
    console.log(`Question: ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const inputValue = await promptly.prompt('Your answer: ');

    if (answer === inputValue) {
      console.log('Correct!');
    } else {
      console.log(
        `'${inputValue}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default { launchGame };
