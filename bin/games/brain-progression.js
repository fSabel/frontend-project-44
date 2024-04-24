#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// The rules of the game
const rulesProgression = 'What number is missing in the progression?';

// Generating a random sequence
const progression = (row, length, num) => {
  const array = [num];
  for (let i = array.length; i <= length; i += 1) {
    const newElement = array[array.length - 1] + row;
    array.push(newElement);
  }
  const randomElement = getRandomInRange(0, array.length - 1);
  array[randomElement] = '..';
  return array;
};

// Round generation
const generateRound = () => {
  let answer;

  const randomProgression = getRandomInRange(1, 4);
  const randomLength = getRandomInRange(5, 10);
  const randomNumber = getRandomInRange(1, 15);
  const rowNumbers = progression(randomProgression, randomLength, randomNumber);
  const question = `Question: ${rowNumbers.join(' ')}`;

  for (let i = 0; i < rowNumbers.length; i += 1) {
    if (i === rowNumbers.length - 1 && rowNumbers[i] === '..') {
      answer = rowNumbers[i - 1] + randomProgression;
    }
    if (i !== rowNumbers.length - 1 && rowNumbers[i] === '..') {
      answer = rowNumbers[i + 1] - randomProgression;
    }
  }
  return [question, answer.toString()];
};

console.log(runEngine(rulesProgression, generateRound));
