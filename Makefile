install: #установка зависимостей
	npm ci

brain-games: # приветствие
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint: # запуск линтера
	npx eslint .

brain-even: # "Проверка на нечётность"
	node bin/brain-even.js