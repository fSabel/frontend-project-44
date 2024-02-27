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

// Проверка на корректность ответа
const check = () => {
    const firstStr = "'yes' is wrong answer ;(. Correct answer was 'no'.\n";
    const secondStr = `Let's try again, ${name}!`;

    for (let correctly = 1; correctly <= 3; correctly += 1) {
        let randomNumber = getRandomNumber(1, 30);
        console.log(`Question: ${randomNumber}`);
        let answer = readlineSync.question('Your answer: ');
        if (randomNumber % 2 === 0 && answer.toLowerCase() === 'yes') {
            console.log('Correct!');
        } else if (randomNumber % 2 !== 0 && answer.toLowerCase() === 'no') {
            console.log('Correct!');
        } else {
            return `${firstStr}${secondStr}`;
        }
    }
    return `Congratulations, ${name}!`;
};

console.log(check());
