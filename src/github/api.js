import {githubAxiosInstance} from './../constants';

export const getUser = (username) => {
  return githubAxiosInstance
    .get(`/users/${username}`)
    .then(function(res) {
      return res.data;
    })
    .catch((error) => {
      console.error(error.message);
    });
};
