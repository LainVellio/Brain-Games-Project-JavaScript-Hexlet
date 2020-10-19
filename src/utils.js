export const isEven = (num) => {
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

export const getRandomInteger = (min, max) => {
  const randomNum = min + Math.random() * (max + 1 - min);
  return Math.floor(randomNum);
};

export const getRandomOperation = () => {
  const randomNum = getRandomInteger(0, 2);
  if (randomNum === 0) {
    return '+';
  } if (randomNum === 1) {
    return '-';
  }
  return '*';
};

export const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

export const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  if (num === 2) {
    return true;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default {
  isEven, getRandomInteger, getRandomOperation, getGCD, isPrime,
};
