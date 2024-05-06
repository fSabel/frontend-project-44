#!/usr/bin/env node
import runEngine from '../index.js';
import getRandomInRange from '../utils.js';

// The rules of the game
const rulesProgression = 'What number is missing in the progression?';

// Generating a random sequence
const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }

  return progression;
};

// Round generation
const generateRound = () => {
  const randomStep = getRandomInRange(1, 4);
  const randomLength = getRandomInRange(5, 10);
  const randomNumber = getRandomInRange(1, 15);
  const progression = generateProgression(randomNumber, randomStep, randomLength);
  
  const hiddenIndex = getRandomInRange(0, progression.length - 1);

  const answer = progression[hiddenIndex].toString();
  progression[hiddenIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  
  return [question, answer];
};

export default () => {
  runEngine(rulesProgression, generateRound);
};
