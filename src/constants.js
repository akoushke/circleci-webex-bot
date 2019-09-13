import axios from 'axios';

export const webexAxiosInstance = axios.create({
  baseURL: 'https://api.ciscospark.com/v1/',
  timeout: 10000,
  headers: {
    authorization:
      'Bearer OGFhOGMyNjAtNjJhZC00NmYzLTg1ZTktZjkzOGU5MWJlMmU3NWUxZWM1MGItMTdj_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f',
  },
});

export const githubAxiosInstance = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 10000,
});

export const PORT = 9999;

export const ACTION_TYPE = {
  PR: 'PR',
  STATUS: 'STATUS',
};
