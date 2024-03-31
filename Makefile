install: #установка зависимостей
	npm ci

brain-games: # приветствие
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .

brain-even: # Проверка на нечётность
	node bin/games/brain-even.js

brain-calc: # Калькулятор
	node bin/games/brain-calc.js

brain-gcd: # НОД
	node bin/games/brain-gcd.js

brain-progression: # Арифметическая прогрессия
	node bin/games/brain-progression.js