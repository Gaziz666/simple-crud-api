// const http = require('http');
import http from 'http';
import { parse } from 'url';
import { router } from './router.js';

const host = 'localhost';
const port = 3000;

http
  .createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    console.log(parsedUrl);
    const pathName = parsedUrl.pathname.split('/');
    console.log(pathName);
    let routerFunc =
      router[req.method + ':' + pathName[1]] || router['default'];
    try {
      routerFunc(req, res, { id: pathName[2], query: parsedUrl.query });
    } catch (error) {
      res.writeHead(500);
      res.write(error.message);
      res.end();
    }
  })
  .listen(port, host, () =>
    console.log(`Server is running at http://${host}:${port}/`),
  );
