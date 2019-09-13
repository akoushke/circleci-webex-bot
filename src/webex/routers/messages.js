import express from 'express';
import {getMessage, postMessage} from './../api';
import {notify, arash} from '../cards';
import constants from './../../constants';

const router = express.Router();

router.get('/:id', (request, response) => {
  const messageID = request.params['id'];

  getMessage(messageID)
    .then((data) => response.send(data))
    .catch((error) => response.send(error));
});

router.post('/', (request, response) => {
  postMessage(params)
    .then((data) => response.send(data))
    .catch((error) => response.send(error));
});

export default router;
