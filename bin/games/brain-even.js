#!/usr/bin/env node
import runEngine from '../../src/index.js';
import getRandomInRange from '../../src/utils.js';

// Правила игры
const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на корректность ответа
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
