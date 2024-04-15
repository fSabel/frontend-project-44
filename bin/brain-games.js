#!/usr/bin/env node
import greeting from '../src/cli.js';

const name = greeting();
console.log(`Hello, ${name}!`);
