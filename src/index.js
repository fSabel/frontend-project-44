#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const runEngine = (isRules, generateRound) => {
  const roundsCount = 3;

  const name = greeting().split('!').join('').split(', ')[1];
  console.log(isRules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const resAnswer = readlineSync.question('Your answer: ');

    // Отрицательный результат
    const firstStr = `${resAnswer} is wrong answer ;(. Correct answer was ${answer}.\n`;
    const secondStr = `Let's try again, ${name}!`;

    if (resAnswer !== answer) {
      return `${firstStr}${secondStr}`;
    }
    console.log('Correct!');
  }
  return `Congratulations, ${name}!`;
};

export default runEngine;
