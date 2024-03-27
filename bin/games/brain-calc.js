#!/usr/bin/env node
import unifiedLogic from '../../src/index.js';

// Реализуем случайное число
const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

// Правила игры
const rulesCalc = 'What is the result of the expression?';

const round = () => {
  let answer;
  // Генерация случайных математических операций
  const ops = ['+', '-', '*'];
  const opindex = getRandomNumber(0, 3);
  const operator = ops[opindex];
  const randomNumber1 = getRandomNumber(1, 30);
  const randomNumber2 = getRandomNumber(1, 30);
  const question = `Question: ${randomNumber1} ${operator} ${randomNumber2}`;
  console.log(question);
  if (operator === '+') {
    answer = randomNumber1 + randomNumber2;
  } else if (operator === '-') {
    answer = randomNumber1 - randomNumber2;
  } else {
    answer = randomNumber1 * randomNumber2;
  }
  return answer.toString();
};

const check = () => {
  const rules = `${rulesCalc}`;
  return unifiedLogic(rules, round);
};

console.log(check());
