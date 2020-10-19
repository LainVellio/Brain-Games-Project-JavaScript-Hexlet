import { getRandomInteger, getGCD } from '../src/utils.js';
import { launchGame } from '../src/index.js';

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  const getNextQuestion = () => {
    const numOne = getRandomInteger(1, 100);
    const numTwo = getRandomInteger(1, 100);
    const question = `${numOne} ${numTwo}`;
    const answer = String(getGCD(numOne, numTwo));
    return { answer, question };
  };
  launchGame(rules, getNextQuestion);
};
