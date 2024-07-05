import Constants from '@/constants';
import { Http } from '@/utils/http';
import Functions, { Tokens } from '@/utils';

const header = {
  'Content-Type': 'application/json',
  'Authorization': `${Tokens.userToken}`,
};

export const getQuestions = (data) => {
  var url = `${Constants.URLS.FAMOUS.QUESTIONS}/${data}`;
  return fetch(url).then((res) => res.json());
};

export const getImages = (data) => {
  return `${Constants.URLS.FAMOUS.IMAGES}/${data}`;
};

export default {
  getQuestions,
};