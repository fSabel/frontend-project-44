#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesProgression = 'What number is missing in the progression?';

const generateRound = () => {
  let answer;
  // Generating a random sequence
  const randomProgression = getRandomInRange(1, 4);
  const randomLength = getRandomInRange(5, 10);
  const randomNumber = getRandomInRange(1, 15);
  const array = [randomNumber];
  for (let i = array.length; i <= randomLength; i += 1) {
    const newElement = array[array.length - 1] + randomProgression;
    array.push(newElement);
  }
  const randomElement = getRandomInRange(0, array.length - 1);
  array[randomElement] = '..';
  const question = `Question: ${array.join(' ')}`;

  for (let i = 0; i < array.length; i += 1) {
    if (i === array.length - 1 && array[i] === '..') {
      answer = array[i - 1] + randomProgression;
    }
    if (i !== array.length - 1 && array[i] === '..') {
      answer = array[i + 1] - randomProgression;
    }
  }
  return [question, answer.toString()];
};

const check = () => {
  const rules = `${rulesProgression}`;
  return runEngine(rules, generateRound);
};
console.log(check());
