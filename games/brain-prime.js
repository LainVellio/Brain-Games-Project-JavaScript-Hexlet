import { randomInteger, isPrime } from '../src/utils.js';
import index from '../src/index.js';

export default () => {
  const arr = [];
  arr[0] = 'Answer "yes" if given number is prime. Otherwise answer "no"';
  for (let i = 1; i < 4; i += 1) {
    const questionNum = randomInteger(1, 100);
    arr[i] = questionNum;
    if (isPrime(questionNum)) {
      arr[i + 3] = 'yes';
    } else {
      arr[i + 3] = 'no';
    }
  }
  index(arr);
};
