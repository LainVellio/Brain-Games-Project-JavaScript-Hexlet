import { getRandomInteger, getRandomOperation } from '../src/utils.js';
import { launchGame } from '../src/index.js';

export default () => {
  const rules = 'What is the result of the expression?';
  const getAnswer = (a, b, operator) => {
    if (operator === '+') {
      return a + b;
    }
    if (operator === '-') {
      return a - b;
    }
    if (operator === '*') {
      return a * b;
    }
    return 0;
  };
  const getNextQuestion = () => {
    const a = getRandomInteger(0, 10);
    const b = getRandomInteger(0, 10);
    const operator = getRandomOperation();
    const question = `${a} ${operator} ${b}`;
    const answer = String(getAnswer(a, b, operator));
    return { question, answer };
  };
  launchGame(rules, getNextQuestion);
};
