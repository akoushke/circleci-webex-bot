import express from 'express';
import {getMessage, getPerson} from './../api';
import constants from './../../constants';

const router = express.Router();

router.post('/', (request, response) => {
  getMessage(request.body.data.id).then((message) => {
    const {roomId} = message;
    const text = message.text.replace('CircleCI', '').trim();

    getPerson(request.body.data.personId).then((person) => {
      const {displayName} = person;
      followProject().then((build) => console.log(build));
    });
  });
});

export default router;
