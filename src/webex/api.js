import {webexAxiosInstance} from './../constants';

export const getMessage = (id) => {
  return webexAxiosInstance
    .get(`/messages/${id}`)
    .then(function(res) {
      return res.data;
    })
    .catch((error) => {
      console.error(error.message);
    });
};

export const postMessage = (roomId, text, markdown, attachments) => {
  return webexAxiosInstance
    .post(`/messages`, {roomId, text, markdown, attachments})
    .then(function(res) {
      return res.data;
    })
    .catch((error) => console.error(error));
};

export const getPerson = (id) => {
  return webexAxiosInstance
    .get(`/people/${id}`)
    .then(function(res) {
      return res.data;
    })
    .catch((error) => {
      console.error(error.message);
    });
};
