#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greeting from './cli.js';

const roundsCount = 3;

const runEngine = (rules, generateRound) => {
  const name = greeting();
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = generateRound();
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');

    // Negative result
    const firstStr = `${userAnswer} is wrong answer ;(. Correct answer was ${answer}.\n`;
    const secondStr = `Let's try again, ${name}!`;

    if (userAnswer !== answer) {
      return console.log(`${firstStr}${secondStr}`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${name}!`);
};

export default runEngine;
