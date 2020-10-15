export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const randomInteger = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

export const randomOperation = () => {
  const randomNum = randomInteger(0, 2);
  if (randomNum === 0) {
    return '+';
  } if (randomNum === 1) {
    return '-';
  }
  return '*';
};

export default { isEven, randomInteger, randomOperation };
