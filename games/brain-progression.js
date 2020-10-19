import { getRandomInteger } from '../src/utils.js';
import { launchGame } from '../src/index.js';

export default () => {
  const rules = 'What number is missing in the progression?';

  const getNextQuestion = () => {
    let question = '';
    const firstElement = getRandomInteger(1, 20);
    const term = getRandomInteger(1, 9);
    const length = getRandomInteger(6, 16) - 1;
    const lastElement = firstElement + length * term;
    const hideElement = firstElement + getRandomInteger(0, length) * term;
    const answer = String(hideElement);
    for (let a = firstElement; a <= lastElement; a += term) {
      if (a !== hideElement) {
        question = `${question + a} `;
      } else {
        question = `${question}.. `;
      }
    }
    return { question, answer };
  };
  launchGame(rules, getNextQuestion);
};
