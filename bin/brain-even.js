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
// const check = () => {
//     let correctSum = 0;
//     let randomNumber = getRandomNumber(1, 30);
//     console.log(`Question: ${randomNumber}`);
//     let answer = readlineSync.question('Your answer: ');
//     if (randomNumber % 2 === 0) {
//         if (answer.toLowerCase() === 'yes') {
//             console.log('Correct!');
//             correctSum += 1;
//             randomNumber = getRandomNumber(1, 30);
//             console.log(`Question: ${randomNumber}`);
//             answer = readlineSync.question('Your answer: ');
//         }
//         if (answer.toLowerCase() === 'yes') {
//             console.log('Correct!');
//             correctSum += 1;
//             randomNumber = getRandomNumber(1, 30);
//             console.log(`Question: ${randomNumber}`);
//             answer = readlineSync.question('Your answer: ');
//         }
//         if (answer.toLowerCase() === 'yes') {
//             console.log('Correct!');
//             correctSum += 1;
//             randomNumber = getRandomNumber(1, 30);
//             console.log(`Question: ${randomNumber}`);
//             answer = readlineSync.question('Your answer: ');
//         }
//     } else if (randomNumber % 2 !== 0) {
//         if (answer.toLowerCase() === 'no') {
//             console.log('Correct!');
//             correctSum += 1;
//             randomNumber = getRandomNumber(1, 30);
//             console.log(`Question: ${randomNumber}`);
//             answer = readlineSync.question('Your answer: ');
//         }
//         if (answer.toLowerCase() === 'no') {
//             console.log('Correct!');
//             correctSum += 1;
//             randomNumber = getRandomNumber(1, 30);
//             console.log(`Question: ${randomNumber}`);
//             answer = readlineSync.question('Your answer: ');
//         }
//         if (answer.toLowerCase() === 'no') {
//             console.log('Correct!');
//             correctSum += 1;
//             randomNumber = getRandomNumber(1, 30);
//             console.log(`Question: ${randomNumber}`);
//             answer = readlineSync.question('Your answer: ');
//         }
//     } else {
//         const firstStr = "'yes' is wrong answer ;(. Correct answer was 'no'.\n";
//         const secondStr = `Let's try again, ${name}!`;
//         return console.log(`${firstStr}${secondStr}`);
//     }

//     if (correctSum === 3) {
//         return console.log(`Congratulations, ${name}!`);
//     }
// };

// console.log(check());

