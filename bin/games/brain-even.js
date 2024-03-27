#!/usr/bin/env node
import unifiedLogic from '/home/gringblade/frontend-project-44/src/index.js';

// Реализуем случайное число
const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

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
