<h1 align="center">Тестовое задание</h1>

[![Build Status](https://travis-ci.com/ArtMan-8/test-frontend-lnj4C8vy.svg?branch=master)](https://travis-ci.com/ArtMan-8/test-frontend-lnj4C8vy) <a target="_blank" href="https://artman-8.github.io/test-frontend-lnj4C8vy/"><img src="https://img.shields.io/badge/сайт-онлайн-000000?style=flat-square&labelColor=black"/></a>

Сверстать всплывающий попап.
Макеты в figma:
- одна кнопка по середине экрана
- попап с налоговым вычетом без чек-боксов
- попап с налоговым вычетом с чек-боксами

### Реализовать:
- адаптивную вёрстку
- логику открытия/закрытия попапа
- логику расчёта и показа чек-боксов, исходя из введённой зарплаты в инпуте

По стеку можно все, но предпочтительнее React.

---
## Пример:
Клиенты, еще ни разу в жизни не воспользовавшись налоговым вычетом имеют право раз в год вернуть не более 13% от своего годового дохода в качестве имущественного вычета. Что это значит для нас? Значит клиенты, которые воспользуются налоговым вычетом гарантированно имеют возможность вносить досрочные платежи. При учитывании вычета в расчетах сайт должен запросить размер месячной ЗП для расчета.

(ЗП в месяц * 12) * 0,13 = размер вычета в год.<br>
Пример: Месячная ЗП = 50 000 рублей или 600 000 рублей в год.<br>
Налоговый вычет в год = (50000*12) * 0,13 = 78 000 рублей.<br>
Значит клиент, как нормальный человек, будет вносить налоговый вычет в досрочку 4 раза:
- 78 000 рублей в 1-ый год
- 78 000 рублей во 2-ой
- 78 000 рублей в 3-ий
- 26 000 рублей в 4-ый

Налоговый вычет можно получать 1 раз в год, до тех пор пока не наберете максимальную сумму вычета в зависимости от стоимости купленной квартиры. На квартиры менее 2 млн. вычет 13% от стоимости квартиры, на квартиры свыше 2 млн. максимум 260 тыс. рублей. При использовании налогового вычета в качестве досрочки в итоговой таблице расчетов налоговые вычеты должны быть уже записаны как досрочные платежи.

---
## Используемые инструменты
<img src="https://img.shields.io/badge/React-code-FF0000?style=flat-square&logo=React&labelColor=black"> <img src="https://img.shields.io/badge/scss-code-FF0000?style=flat-square&logo=sass&labelColor=black">

<img src="https://img.shields.io/badge/VSCode-tool-0000FF?style=flat-square&logo=Visual-Studio-Code&labelColor=black"> <img src="https://img.shields.io/badge/RCA-tool-0000FF?style=flat-square&logo=React&labelColor=black"> <img src="https://img.shields.io/badge/ESlint-tool-0000FF?style=flat-square&logo=ESlint&labelColor=black"> <img src="https://img.shields.io/badge/TravisCI-tool-0000FF?style=flat-square&logo=Travis-CI&labelColor=black"> <img src="https://img.shields.io/badge/ghPages-tool-0000FF?style=flat-square&logo=GitHub&labelColor=black">

### Установка и запуск
1. Для установки необходимо клонировать репозиотрий на свой компьютер.
2. Запустить установку необходимых пакетов командой `npm i` или `yarn install`.
3. Запустить тестов командой `npm run test` или `yarn test`.
4. Запустить приложение командой `npm run start` или `yarn start`.
5. Приложение доступно по адрессу `localhost:3000`.
6. Приложение онлайн https://artman-8.github.io/test-frontend-lnj4C8vy.