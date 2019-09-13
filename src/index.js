import axios from 'axios';
import express from 'express';
import bodyParser from 'body-parser';
import {PORT, ACTION_TYPE} from './constants';
import messages from './webex/routers/messages';
import webhooks from './webex/routers/webhooks';
import {postMessage} from './webex/api';
import {getPRTemplate, getStatusTemplate} from './webex/cards';
import {getUser} from './github/api';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Pragma');
  response.header('Access-Control-Allow-Methods', 'GET, POST');
  response.header('Access-Control-Allow-Origin', '*');

  next();
});

app.use('/messages', messages);
app.use('/webhooks', webhooks);

app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
});

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/', (request, response) => {
  const params = request.body;
  const type = request.body.type;

  switch (type) {
    case ACTION_TYPE.PR:
      notifyPR(params);
      break;
    case ACTION_TYPE.STATUS:
      notifyStatus(params);
      break;
  }

  response.send('request successfully sent!');
});

const notifyPR = async ({reponame, roomID, message, username, prURL, buildURL}) => {
  const user = await getUser(username);
  const card = getPRTemplate(reponame, user, buildURL, prURL);
  // const markdown = `${username} triggered a (job)[${buildURL}] from this (pull request)[${prURL}]`;
  postMessage(roomID, message, '', card);
};

const notifyStatus = async ({reponame, roomID, message, buildURL, style}) => {
  const card = getStatusTemplate(reponame, message, buildURL, style);
  // const markdown = `[Job number ${buildNumber}](${buildURL}) has been successfully completed!]`;
  postMessage(roomID, message, '', card);
};
