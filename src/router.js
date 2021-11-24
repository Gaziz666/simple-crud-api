import { getController, postController, noResponse } from './controller.js';

export const router = {
  'GET:person': getController,
  'POST:person': postController,
  default: noResponse,
};
