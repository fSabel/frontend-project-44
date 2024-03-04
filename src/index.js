#!/usr/bin/env node
import readlineSync from 'readline-sync';

const unifiedLogic = () => {
    // Приветствие, начало игры
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    let unitedRule = ruleForGame;
    console.log(unitedRule);
    let unitedCondition;

    for (let correctly = 1; correctly <= 3; correctly += 1) {
        unitedCondition = condition;
        console.log(`Question: ${randomNumber}`);
        let answer = readlineSync.question('Your answer: ');
        if (unitedCondition) {
            console.log('Correct!');
        } else {
            return `${firstStr}${secondStr}`;
        }
    }
    return `Congratulations, ${name}!`;
};

export default unifiedLogic;

