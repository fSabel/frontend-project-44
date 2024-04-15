#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesCalc = 'What is the result of the expression?';

const generateRound = () => {
  let answer;
  // Generating random mathematical operations
  const ops = ['+', '-', '*'];
  const opindex = getRandomInRange(0, 2);
  const operator = ops[opindex];
  const randomNumber1 = getRandomInRange();
  const randomNumber2 = getRandomInRange();
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;

  if (operator === '+') {
    answer = randomNumber1 + randomNumber2;
  } else if (operator === '-') {
    answer = randomNumber1 - randomNumber2;
  } else {
    answer = randomNumber1 * randomNumber2;
  }
  return [question, answer.toString()];
};

const check = () => {
  const rules = `${rulesCalc}`;
  return runEngine(rules, generateRound);
};
console.log(check());
