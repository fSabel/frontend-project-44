#!/usr/bin/env node
import readlineSync from 'readline-sync';
import unifiedLogic from '/home/gringblade/frontend-project-44/src/index.js'

// Реализуем случайное число
const getRandomNumber = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
};

// Правила игры
const rulesEven = 'Answer "yes" if the number is even, otherwise answer "no".';

// Проверка на корректность ответа
const round = () => {
    let randomNumber = getRandomNumber(1, 30);
    let question = `Question: ${randomNumber}`;
    console.log(question);
    let answer = readlineSync.question('Your answer: ');
    
    return [`${randomNumber}`, answer];
}

const check = () => {
    const rules = `${rulesEven}`
    unifiedLogic(rules, round);
}

console.log(check());

