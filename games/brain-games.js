import promptly from 'promptly';
import brainProgression from './brain-progression.js';
import brainEven from './brain-even.js';
import brainGcd from './brain-gcd.js';
import brainPrime from './brain-prime.js';
import brainCalc from './brain-calc.js';

export const chooseGame = async () => {
  console.log('Select the game number please:');
  console.log('1. Brain Even');
  console.log('2. Brain Calc');
  console.log('3. Brain GCD');
  console.log('4. Brain Progression');
  console.log('5. Brain Prime');
  const inputValue = await promptly.prompt('You choose game number: ');
  switch (inputValue) {
    case '1':
      brainEven();
      break;
    case '2':
      brainCalc();
      break;
    case '3':
      brainGcd();
      break;
    case '4':
      brainProgression();
      break;
    case '5':
      brainPrime();
      break;
    default:
      console.log('Wrong choice');
  }
};

export default { chooseGame };
