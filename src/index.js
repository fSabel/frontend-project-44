#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const getRandomNumber = (min, max) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum) + minimum);
};

const unifiedLogic = (isRules, funcForRound) => {
  // Приветствие, начало игры
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(isRules);

  for (let i = 0; i < 3; i += 1) {
    const answer = funcForRound();
    const resAnswer = readlineSync.question('Your answer: ');
    // Отрицательный результат
    const firstStr = `${resAnswer} is wrong answer ;(. Correct answer was ${answer}.\n`;
    const secondStr = `Let's try again, ${name}!`;

    if (resAnswer !== answer) {
      return `${firstStr}${secondStr}`;
    }
    console.log('Correct!');
  }
  return `Congratilations, ${name}!`;
};

export default unifiedLogic;
