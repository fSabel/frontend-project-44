#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Checking for the correctness of the response
const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

// Round generation
const generateRound = () => {
  const randomNumber = getRandomInRange();
  const question = `Question: ${randomNumber}`;
  const answer = isEven(randomNumber);
  return [question, answer];
};

console.log(runEngine(rulesEven, generateRound));
