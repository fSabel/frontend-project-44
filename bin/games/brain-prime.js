#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesPrime = 'Answer "yes" if given number is prime. Otherwise answer "no".';

// Is it a prime number or not
const isPrime = (num) => {
  let count = 0;
  if (num === 1) {
    return 'no';
  }
  const checkForSimpleNum = [];
  for (let i = num; i >= 1; i -= 1) {
    checkForSimpleNum.push(i);
  }
  for (let i = 0; i < checkForSimpleNum.length; i += 1) {
    if (num % checkForSimpleNum[i] === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    return 'yes';
  }
  return 'no';
};

// Round generation
const generateRound = () => {
  const randomNumber = getRandomInRange(1, 30);
  const question = `Question: ${randomNumber}`;
  const answer = isPrime(randomNumber);
  return [question, answer];
};

console.log(runEngine(rulesPrime, generateRound));
