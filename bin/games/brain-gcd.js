#!/usr/bin/env node
import { getRandomNumber, unifiedLogic } from '../../src/index.js';

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
    const newArr = arr.sort((a, b) => a - b);
    for (let i = 0; i < newArr.length; i += 1) {
      const res = newArr[i] % newArr[i + 1];
      arr.push(res);
      console.log(newArr);
      if (res === 0) {
        answer = newArr[i + 1];
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
