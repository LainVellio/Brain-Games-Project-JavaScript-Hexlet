import { getRandomInteger, isEven } from '../src/utils.js';
import { launchGame } from '../src/index.js';

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

  const getNextQuestion = () => {
    const question = getRandomInteger(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };

  launchGame(rules, getNextQuestion);
};
