#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// Правила игры
const rulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  let answer;
  let count = 0;
  const randomNumber = getRandomInRange(1, 30);
  const question = `Question: ${randomNumber}`;

  if (randomNumber === 1) {
    answer = 'no';
    return answer;
  }
  const checkForSimpleNum = [];
  for (let i = randomNumber; i >= 1; i -= 1) {
    checkForSimpleNum.push(i);
  }
  for (let i = 0; i < checkForSimpleNum.length; i += 1) {
    if (randomNumber % checkForSimpleNum[i] === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return [question, answer];
};

const check = () => {
  const rules = `${rulesPrime}`;
  return runEngine(rules, generateRound);
};
console.log(check());
