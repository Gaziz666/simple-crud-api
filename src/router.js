import {
  getController,
  postController,
  noResponse,
  putController,
  deleteController,
} from './controller.js';

export const router = {
  'GET:person': getController,
  'POST:person': postController,
  'PUT:person': putController,
  'DELETE:person': deleteController,
  default: noResponse,
};
