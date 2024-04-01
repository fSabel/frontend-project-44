#!/usr/bin/env node
import { getRandomNumber, unifiedLogic } from '../../src/index.js';

// Правила игры
const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на корректность ответа
const round = () => {
  let answer;
  const randomNumber = getRandomNumber(1, 30);
  const question = `Question: ${randomNumber}`;
  console.log(question);
  if (randomNumber % 2 === 0) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  return answer;
};

const check = () => {
  const rules = `${rulesEven}`;
  return unifiedLogic(rules, round);
};

console.log(check());
