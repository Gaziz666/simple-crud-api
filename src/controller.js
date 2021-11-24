import { v4 as uuid, validate as uuidValidate } from 'uuid';
import { person } from './db.js';

export const getController = (req, res, { id, query }) => {
  console.log('start', id);
  if (id) {
    if (!uuidValidate(id)) {
      res.writeHead(400);
      res.write('id is not uuid format');
      res.end();
      return;
    }
    const result = person.getById(id);
    if (result) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(result));
      res.end();
      return;
    } else {
      res.writeHead(404);
      res.write('Person by given id not found');
      res.end();
      return;
    }
  } else {
    const result = person.getAll();
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify(result));
    res.end();
    return;
  }
};

export const postController = (req, res) => {
  req.setEncoding('utf8');
  req.on('data', (chunk) => {
    const newPerson = person.create(JSON.parse(chunk));
    if (newPerson) {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.write(JSON.stringify(newPerson));
    } else {
      res.writeHead(400);
      res.write('please provide all attributes correct');
    }
    res.end();
  });
};

export const noResponse = (req, res, reqUrl) => {
  res.writeHead(404);
  res.write('Sorry url not found');
  res.end();
};
