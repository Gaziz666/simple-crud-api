# simple-crud-api

RSSchool Nodejs2021Q3 Task3

## Instal APP

1. clone repo from git
   `git clone --single-branch --branch dev git@github.com:Gaziz666/simple-crud-api.git`
2. instal dependence
   `npm i`
3. create .env file and use varibles from .env.example
4. Start app development mode
   `npm run start:dev`
   Server is running at http://localhost:3000/

5. Open Postman and implement next handlers:

- **GET** `/person`:
  - Server return status code 200 and all rows if exists
- **GET** `/person/{personId}`:
  - Server return status code 200 and row with `id === personId` if exists
  - Server return status code 400 and error message `id is not uuid format` if `personId` is invalid
  - Server return status code 404 if person with `id === personId` not found
- **POST** `/person` create person with body and header `"Content-type: aplication/json"`
  body example
  `{ "name": "name", "age": 12, "hobbies": ["do something"] }`
  - Server return status code 201 and return created person
  - Server return status code 400 if required fields is missed
- **PUT** `/person/{personId}` update person
  - Server return status code 200 and updated person
  - Server return status code 400 and error message if `personId` is invalid
  - Server return status code 404 and error message if person with `id === personId` not found
- **DELETE** `/person/{personId}` delet person
  - Server return status code 204 if person is founded and removed
  - Server return status code 400 and error message if `personId` is invalid
  - Server return status code 404 and error message if person with `id === personId` not found

## Продвинутая реализация:

- Ошибки, возникающие при обработке запроса на `/person` корректно обрабатываются и в случае их возникновения API возвращает статус код 500 с соответствующим сообщением
  for check it add throe new Error in controller.js
- Запросы на несуществующие ресурсы (например, `/some/non/existing/resource`) корректно обрабатываются (возвращается human friendly сообщение и 404 статус код)
  for check it use http://localhost:3000/some/non/existing/resource
- Приложение запускается в development-режиме при помощи `nodemon` (имеется `npm` скрипт `start:dev`)
- Приложение запускается в production-режиме при помощи `webpack` (имеется `npm` скрипт `start:prod`, который запускает процесс сборки webpack и после этого запускает файл с билдом) **плюс 6 баллов**
- Значение `PORT` хранится в `.env` файле
