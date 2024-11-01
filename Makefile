# Makefile

.PHONY: install brain-games publish lint

install: # Установка зависимостей
	npm	ci

brain-games: # Запуск игры
	node bin/brain-games.js

publish: # Публикация пакета
	npm publish --dry-run

lint: # Проверка Eslint
	npx eslint .
