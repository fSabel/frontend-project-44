#!/usr/bin/env node
import { getRandomNumber } from '../../src/index.js';
import unifiedLogic from '../../src/index.js';

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
