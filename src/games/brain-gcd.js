#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// The rules of the game
const rulesGcd = 'Find the greatest common divisor of given numbers.';

// Finding the largest common divisor
const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }

  return getGcd(num2 % num1, num1);
};

// Round generation
const generateRound = () => {
  const randomNumber1 = getRandomInRange(1);
  const randomNumber2 = getRandomInRange(1);

  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const answer = getGcd(randomNumber1, randomNumber2).toString();
  return [question, answer];
};

export default () => {
  runEngine(rulesGcd, generateRound);
};
