#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
};

const check = () => {
    const randomNumber = getRandomNumber(0, 30);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');
    if (randomNumber % 2 === 0 && answer.toLowerCase() === 'yes') {
        return console.log('Correct!');
    } else if (randomNumber % 2 !== 0 && answer.toLowerCase() === 'no') {
        return console.log('Correct!');
    } else {
        const firstStr = "'yes' is wrong answer ;(. Correct answer was 'no'.\n";
        const secondStr = `Let's try again, ${name}!`;
        return console.log(`${firstStr}${secondStr}`);
    }
};

console.log(check());


// console.log(`Your answer: ${answer}`);
