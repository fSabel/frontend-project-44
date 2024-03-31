#!/usr/bin/env node
import unifiedLogic from '../../src/index.js';

const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

// Правила игры
const rulesProgression = 'What number is missing in the progression?';

const round = () => {
  let answer;
  const randomProgression = getRandomNumber(1, 4);
  const randomLength = getRandomNumber(5, 11);
  const randomNumber = getRandomNumber(1, 15);
  const array = [randomNumber];
  for (let i = array.length; i <= randomLength; i += 1) {
    const newElement = array[array.length - 1] + randomProgression;
    array.push(newElement);
  }
  const randomElement = getRandomNumber(0, array.length - 1);
  array[randomElement] = '..';
  const question = `Question: ${array.join(' ')}`;
  console.log(question);
  for (let i = 0; i < array.length; i += 1) {
    if (i === 0) {
      if (array[i] === '..') {
        answer = array[i + 1] - randomProgression;
      }
    } else if (i === array.length - 1) {
      if (array[i] === '..') {
        answer = array[i - 1] + randomProgression;
      }
    } else if (array[i] === '..') {
      answer = array[i + 1] - randomProgression;
    }
  }
  return answer.toString();
};

const check = () => {
  const rules = `${rulesProgression}`;
  return unifiedLogic(rules, round);
};
console.log(check());
