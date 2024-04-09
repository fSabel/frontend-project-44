install: # Installing dependencies
	npm ci

brain-games: # Greeting
	node bin/brain-games.js

publish: # Updating packages
	npm publish --dry-run

lint: # Launching the linter
	npx eslint .

brain-even: # Determining an even number
	node bin/games/brain-even.js

brain-calc: # Calculator
	node bin/games/brain-calc.js

brain-gcd: # Determining the largest common divisor
	node bin/games/brain-gcd.js

brain-progression: # Searching for missing numbers in a sequence of numbers
	node bin/games/brain-progression.js

brain-prime: # Definition of a prime number
	node bin/games/brain-prime.js