#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// The rules of the game
const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Checking for the correctness of the response
const isEven = (num) => num % 2 === 0;

// Round generation
const generateRound = () => {
  const randomNumber = getRandomInRange();
  const question = `Question: ${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  runEngine(rulesEven, generateRound);
};
