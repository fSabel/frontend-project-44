#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Checking for the correctness of the response
const generateRound = () => {
  let answer;
  const randomNumber = getRandomInRange();
  const question = `Question: ${randomNumber}`;
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }
  return [question, answer];
};

const check = () => {
  const rules = `${rulesEven}`;
  return runEngine(rules, generateRound);
};
console.log(check());
