import { randomInteger, randomOperation } from '../src/utils.js';
import index from '../src/index.js';

export default async () => {
  const arr = [];
  arr[0] = 'What is the result of the expression?';
  for (let i = 1; i < 4; i += 1) {
    const numOne = randomInteger(0, 100);
    const operation = randomOperation();
    const numTwo = randomInteger(0, 100);
    arr[i] = `${numOne} ${operation} ${numTwo}`;
    if (operation === '+') {
      arr[i + 3] = String(numOne + numTwo);
    }
    if (operation === '-') {
      arr[i + 3] = String(numOne - numTwo);
    }
    if (operation === '*') {
      arr[i + 3] = String(numOne * numTwo);
    }
  }
  index(arr);
};
