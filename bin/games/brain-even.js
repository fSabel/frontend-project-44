#!/usr/bin/env node
import readlineSync from 'readline-sync';

// Приветствие, начало игры
console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Реализуем случайное число
const getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
};

const firstStr = `${answer} is wrong answer ;(. Correct answer was 'no'.\n`;
const secondStr = `Let's try again, ${name}!`;

// Проверка на корректность ответа
const check = () => {
    for (let correctly = 1; correctly <= 3; correctly += 1) {
        let randomNumber = getRandomNumber(1, 30);
        console.log(`Question: ${randomNumber}`);
        let answer = readlineSync.question('Your answer: ');
        let firstStr = `${answer} is wrong answer ;(. Correct answer was 'no'.\n`;
        let secondStr = `Let's try again, ${name}!`;
        if (randomNumber % 2 === 0 && answer.toLowerCase() === 'yes' || randomNumber % 2 !== 0 && answer.toLowerCase() === 'no') {
            console.log('Correct!');
        } else {
            return `${firstStr}${secondStr}`;
        }
    }
    return `Congratulations, ${name}!`;
};

console.log(check());

