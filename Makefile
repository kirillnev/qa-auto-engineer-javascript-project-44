# Makefile

.PHONY: install brain-games publish lint brain-even brain-calc brain-gcd brain-progression brain-prime

install: # Установка зависимостей
	npm	ci

brain-games: # Запуск приложения
	node bin/brain-games.js

brain-even: # Запуск игры: Проверка на чётность
	node bin/brain-even.js

brain-calc: # Запуск игры: Калькулятор
	node bin/brain-calc.js

brain-gcd: # Запуск игры: НОД
	node bin/brain-gcd.js

brain-progression: # Запуск игры: Арифметическая прогрессия
	node bin/brain-progression.js

brain-prime: # Запуск игры: Простое ли число?
	node bin/brain-prime.js

publish: # Публикация пакета
	npm publish --dry-run

lint: # Проверка Eslint
	npx eslint .
