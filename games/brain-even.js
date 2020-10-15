import { randomInteger, isEven } from '../src/utils.js';
import index from '../src/index.js';

export default () => {
  const arr = [];
  arr[0] = 'Answer "yes" if the number is even, otherwise answer "no"';
  for (let i = 1; i < 4; i += 1) {
    arr[i] = randomInteger(1, 100);
    if (isEven(arr[i]) === true) {
      arr[i + 3] = 'yes';
    } else {
      arr[i + 3] = 'no';
    }
  }
  index(arr);
};
