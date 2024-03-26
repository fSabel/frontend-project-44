#!/usr/bin/env node
import readlineSync from 'readline-sync';

const unifiedLogic = (isRules, funcForRound) => {
    // Приветствие, начало игры
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log(isRules);
  
    for (let i = 0; i < 3; i += 1) {
      const [question, answer] = funcForRound();
      console.log(`Question: ${question}`);
      const resAnswer = readlineSync.question('Your answer: ');
      const firstStr = `${answer} is wrong answer ;(. Correct answer was ${resAnswer}.\n`;
      const secondStr = `Let's try again, ${name}!`;
      if (answer !== resAnswer) {
        return `${firstStr}${secondStr}`
      }
    }
    return `Congratulations, ${name}!`;
  };
  
  export default unifiedLogic;

