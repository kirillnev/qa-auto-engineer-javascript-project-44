# Makefile

.PHONY: install brain-games publish lint

install: # Установка зависимостей
	npm	ci

brain-games: # Запуск приложения
	node bin/brain-games.js

brain-even: # Запуск игры Игра: Проверка на чётность
	node bin/brain-even.js

publish: # Публикация пакета
	npm publish --dry-run

lint: # Проверка Eslint
	npx eslint .
