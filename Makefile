# Makefile

.PHONY: install brain-games publish

install: # Устанавка зависимостей
	npm	ci

brain-games: # Запуск игры
	node bin/brain-games.js

publish: # Публикация пакета
	npm publish --dry-run
