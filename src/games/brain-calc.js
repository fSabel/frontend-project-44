#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// The rules of the game
const rulesCalc = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

// Calculator
const calculation = (num1, num2, operator) => {
  switch (operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    default: throw new Error(`Invalid operator - ${operator})`);
  }
};

// Round generation
const generateRound = () => {
  const num1 = getRandomInRange();
  const num2 = getRandomInRange();
  const operator = getRandomOperator();
  const question = `Question: ${num1} ${operator} ${num2}`;
  const answer = String(calculation(num1, num2, operator));

  return [question, answer];
};

export default () => {
  runEngine(rulesCalc, generateRound);
};
