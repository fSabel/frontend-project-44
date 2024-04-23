#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesGcd = 'Find the greatest common divisor of given numbers.';

// Finding the largest common divisor
const gcd = (num1, num2) => {
  let answer;
  if (num1 >= num2 && num1 % num2 === 0) {
    return num2.toString();
  }
  if (num1 <= num2 && num2 % num1 === 0) {
    return num1.toString();
  }
  const arr = [num1, num2];
  if (arr[0] < arr[1]) {
    arr.reverse();
  }
  for (let i = 0; i < arr.length; i += 1) {
    const res = arr[i] % arr[i + 1];
    arr.push(res);
    if (res === 0) {
      answer = arr[i + 1];
      return answer.toString();
    }
  }
  return answer.toString();
};

// Round generation
const generateRound = () => {
  const randomNumber1 = getRandomInRange(1);
  const randomNumber2 = getRandomInRange(1);

  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  const answer = gcd(randomNumber1, randomNumber2);
  return [question, answer];
};

console.log(runEngine(rulesGcd, generateRound));
