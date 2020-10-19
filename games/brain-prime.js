import { getRandomInteger, isPrime } from '../src/utils.js';
import { launchGame } from '../src/index.js';

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  const getNextQuestion = () => {
    const question = getRandomInteger(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return { question, answer };
  };

  launchGame(rules, getNextQuestion);
};
