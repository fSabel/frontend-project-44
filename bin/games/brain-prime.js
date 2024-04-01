#!/usr/bin/env node
import unifiedLogic from '../../src/index.js';

const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

// Правила игры
const rulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const round = () => {
  let answer;
  const factorial = (num) => {
    if (num === 0) {
      return 1;
    }

    return num * factorial(num - 1);
  };
  const randomNumber = getRandomNumber(1, 30);
  const question = `Question: ${randomNumber}`;
  console.log(question);
  if (randomNumber === 1) {
    answer = 'no';
    return answer;
  }

  if (factorial(randomNumber - 1) % randomNumber === randomNumber - 1) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return answer;
};

const check = () => {
  const rules = `${rulesPrime}`;
  return unifiedLogic(rules, round);
};
console.log(check());
