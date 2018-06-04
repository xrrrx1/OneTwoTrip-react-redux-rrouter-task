# DEMO: https://xrrrx1.github.io/OneTwoTrip-middle-JSdev-task/

## npm install - for install dependencies

## npm run start - for local start

Login : admin

Password: 12345

Mockapi.io sometimes may lag. If you can't log in - check mockapi.io.

##Задача

Реализовать приложение, которое умеет показывать следующие страницы:

/ — главная
/login — страница ввода логина и пароля
/news — страница с новостями (любая однотипная информация)
/profile — страница с произвольным текстом, недоступная без авторизации


На сайте, в шапке или подвале реализовать ссылки:

На главную (/)
Новости (/news)

Форма входа (/login) принимает “фейковые” данные:

username: Admin
password: 12345

Если введены другие данные, то показывается сообщения:

Имя пользователя или пароль введены не верно

Если введены корректные данные, то перебрасывать на страницу /profile

Информацию об авторизации пользователя можно хранить в localStorage, простым параметром true/false. Базу данных реализовать не нужно.