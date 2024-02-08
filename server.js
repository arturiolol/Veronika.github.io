const http = require('http'); // включение модуля из стандартной библиотеки Node.js

const hostname = '127.0.0.1'; // веб-сервер работает локально
const port = 3000;
                              // веб-сервер возвратит такой ответ на любой запрос
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});
                              // запуск веб-сервера
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});