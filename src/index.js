// const http = require('http');
import http from 'http';
import { parse } from 'url';
import { router } from './router.js';
import { config } from 'dotenv';
config();

const host = process.env.HOST;
const port = process.env.PORT;

http
  .createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const pathName = parsedUrl.pathname.split('/');
    if (pathName.length > 3) {
      res.writeHead(404);
      res.write('Url not found');
      res.end();
      return;
    }
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
