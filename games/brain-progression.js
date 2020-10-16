import { randomInteger } from '../src/utils.js';
import index from '../src/index.js';

export default () => {
  const arr = [];
  arr[0] = 'What number is missing in the progression?';
  for (let i = 1; i < 4; i += 1) {
    arr[i] = '';
    const firstElement = randomInteger(1, 20);
    const term = randomInteger(1, 9);
    const length = randomInteger(6, 16) - 1;
    const lastElement = firstElement + length * term;
    const hideElement = firstElement + randomInteger(0, length) * term;
    for (let a = firstElement; a <= lastElement; a += term) {
      if (a !== hideElement) {
        arr[i] = `${arr[i] + a} `;
      } else {
        arr[i] = `${arr[i]}.. `;
        arr[i + 3] = String(hideElement);
      }
    }
  }
  index(arr);
};
