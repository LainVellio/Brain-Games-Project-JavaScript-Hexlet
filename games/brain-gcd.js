import { randomInteger, gcd } from '../src/utils.js';
import index from '../src/index.js';

export default () => {
  const arr = [];
  arr[0] = 'Find the greatest common divisor of given numbers.';
  for (let i = 1; i < 4; i += 1) {
    const numOne = randomInteger(1, 100);
    const numTwo = randomInteger(1, 100);
    arr[i] = `${numOne} ${numTwo}`;
    arr[i + 3] = String(gcd(numOne, numTwo));
  }
  index(arr);
};
