import Constants from '@/constants';
import { Http } from '@/utils/http';
import Functions, { Tokens } from '@/utils';

const header = {
  'Content-Type': 'application/json',
  'Authorization': `${Tokens.userToken}`,
};

export const getPlaces = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.WORLD.PLACES,
  });
  return Http.get(url, header);
};

export const getContinents = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.WORLD.CONTINENTS,
  });
  return Http.get(url, header);
};

export const getCountries = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.WORLD.COUNTRIES,
  });
  return Http.get(url, header);
};

export const getCapitals = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.WORLD.CAPITALS,
  });
  return Http.get(url, header);
};

export const getFriends = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.WORLD.USERS,
  });
  return Http.get(url, header);
};

export const getPosts = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.WORLD.POSTS,
  });
  return Http.get(url, header);
};

export default {
  getPlaces,
  getContinents,
  getCountries,
  getCapitals,
  getFriends,
  getPosts,
};