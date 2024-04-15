#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesGcd = 'Find the greatest common divisor of given numbers.';

const generateRound = () => {
  let answer;
  const randomNumber1 = getRandomInRange(1);
  const randomNumber2 = getRandomInRange(1);

  const question = `Question: ${randomNumber1} ${randomNumber2}`;

  // Finding the largest common divisor
  if (randomNumber1 >= randomNumber2 && randomNumber1 % randomNumber2 === 0) {
    return [question, randomNumber2.toString()];
  }

  if (randomNumber1 <= randomNumber2 && randomNumber2 % randomNumber1 === 0) {
    return [question, randomNumber1.toString()];
  }
  const arr = [randomNumber1, randomNumber2];
  if (arr[0] < arr[1]) {
    arr.reverse();
  }
  for (let i = 0; i < arr.length; i += 1) {
    const res = arr[i] % arr[i + 1];
    arr.push(res);
    if (res === 0) {
      answer = arr[i + 1];
      return [question, answer.toString()];
    }
  }
  return [question, answer.toString()];
};

const check = () => {
  const rules = `${rulesGcd}`;
  return runEngine(rules, generateRound);
};
console.log(check());
