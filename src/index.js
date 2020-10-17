import promptly from 'promptly';

export const launchGame = async (rules, questions, answers) => {
  console.log('Welcome to the Brain Games');
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < questions.length; i += 1) {
    const question = questions[i];
    console.log(`Question: ${question}`);
    // eslint-disable-next-line no-await-in-loop
    const inputAnswer = await promptly.prompt('Your answer: ');
    const answer = answers[i];

    if (answer === inputAnswer) {
      console.log('Correct!');
    } else {
      console.log(
        `'${inputAnswer}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${name}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default { launchGame };
