import { randomInteger, isEven } from '../src/utils.js';
import { launchGame } from '../src/index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';
  const questions = [];
  const answers = [];
  const numQuestions = 10;

  for (let i = 0; i < numQuestions; i += 1) {
    const question = randomInteger(1, 100);
    questions.push(question);
    const answer = isEven(question) ? 'yes' : 'no';
    answers.push(answer);
  }
  // console.log('questions', questions);
  // console.log('answers', answers);
  launchGame(rules, questions, answers);
};
