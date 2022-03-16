/* eslint-disable no-undef */
import { put, post, get, del } from './NetworkUtils';
import { BASE_URL } from './config';
import md5 from 'md5';

/*============================================================*/
function createAuth() {
  const ts = new Date().getTime();
  const apikey = process.env.REACT_APP_PUBLICKEY;
  const privatekey = process.env.REACT_APP_PRIVATEKEY;
  const hash = md5(ts.toString() + privatekey + apikey);
  return {
    ts,
    apikey,
    hash,
  };
}
/*============================================================*/

/*============================================================*/

// get api - use the mode to create new api functions
export const getHeroes = (name, page, limit) => {
  const URL = '/characters';
  const Page = page ? page : 1;
  const Limit = limit ? limit : 25;
  const offset = Limit * (Page - 1);
  return get(BASE_URL, URL, {
    params: {
      ...createAuth(),
      limit: Limit,
      offset,
      nameStartsWith: name,
    },
  });
};
export const getHero = (id) => {
  const URL = `/characters/${id}`;
  return get(BASE_URL, URL, {
    params: {
      ...createAuth(),
    },
  });
};

// // post api - use the mode to create new api functions
// export const postAPI = (payload) => {
//   const isAuthenticated = false;
//   const multiPathConfig = false;
//   const URL = `/custom_url`;
//   return post(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
// };

// // put api - use the mode to create new api functions
// export const putAPI = (id, payload) => {
//   const isAuthenticated = true;
//   const multiPathConfig = false;
//   const URL = `/custom_url/${id}`;
//   return put(BASE_URL, URL, payload, isAuthenticated, multiPathConfig);
// };

// // delete api - use the mode to create new api functions
// export const deleteAPI = (id) => {
//   const isAuthenticated = false;
//   const URL = `/custom_url/${id}`;
//   return del(BASE_URL, URL, isAuthenticated);
// };
