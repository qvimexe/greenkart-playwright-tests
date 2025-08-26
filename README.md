# GreenKart Automated Tests (Playwright + JavaScript)

Этот проект содержит автоматизированные тесты для проверки функциональности сайта [GreenKart](https://rahulshettyacademy.com/seleniumPractise/#/) с использованием **Playwright** и **JavaScript**.  
Задача взята из тестового задания уровня **Junior+**.


## Функциональность тестов

Тест проверяет следующие шаги:

1. Переход на сайт [GreenKart](https://rahulshettyacademy.com/seleniumPractise/#/).
2. Ввод значения **"ro"** в строку поиска.
3. Поиск элемента **Carrot** в результатах и установка количества равным `5` (через поле ввода).
4. Поиск элемента **Mushroom** в результатах и установка количества равным `3` (через кнопки `increment`).
5. Добавление **Carrot** в корзину.
6. Добавление **Mushroom** в корзину.
7. Переход в корзину.
8. Удаление **Carrot** из корзины.


## Требования
Перед началом убедитесь, что установлены:

- [Node.js](https://nodejs.org/en/download/) — фреймворк для end-to-end тестирования
- [npm](https://docs.npmjs.com/) — пакетный менеджер (устанавливается вместе с Node.js)
- [Visual Studio Code](https://code.visualstudio.com/) (рекомендуется как IDE)
- [Playwright](https://playwright.dev/) — фреймворк для end-to-end тестирования

Проверить версии Node.js, npm можно командами: `node -v`, `npm -v`


## Установка проекта

(команды вводить в консоль)

1. Клонировать репозиторий: `git clone https://github.com/qvimexe/greenkart-playwright-tests.git`, `cd green-kart-playwright-js`
2. Установить зависимости: `npm install`
3. Установить браузеры Playwright: `npx playwright install`


## Запуск тестов

(команды вводить в консоль)

1. Запустить все тесты в headless-режиме: `npx playwright test`
2. Запустить тесты с открытым браузером: `npx playwright test --headed`


## Структура проекта

```bash
green-kart-playwright-js/
│── tests/
│   ├── greenkart.spec.js    # Основной тестовый сценарий
│   └── locators.js          # Локаторы для элементов
│── package.json             # Зависимости и команды запуска
│── playwright.config.js     # Конфигурация Playwright
└── README.md                # Документация проекта
