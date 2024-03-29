#!/usr/bin/env node
import unifiedLogic from '../../src/index.js';

const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

// Правила игры
const rulesGcd = 'Find the greatest common divisor of given numbers.';

const round = () => {
  let answer;
  const randomNumber1 = getRandomNumber(1, 40);
  const randomNumber2 = getRandomNumber(1, 40);
  const question = `Question: ${randomNumber1} ${randomNumber2}`;
  console.log(question);

  // Поиск НОД
  if (randomNumber1 >= randomNumber2 && randomNumber1 % randomNumber2 === 0) {
    answer = randomNumber2;
  } else if (randomNumber1 <= randomNumber2 && randomNumber2 % randomNumber1 === 0) {
    answer = randomNumber1;
  } else {
    const arr = [randomNumber1, randomNumber2];
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
  }
  return answer.toString();
};

const check = () => {
  const rules = `${rulesGcd}`;
  return unifiedLogic(rules, round);
};
console.log(check());
