import Constants from '@/constants';
import { Http } from '@/utils/http';
import Functions, { Tokens } from '@/utils';

const header = {
  'Content-Type': 'application/json',
  'Authorization': `${Tokens.userToken}`,
};

export const createUser = (params) => {
  return Http.post(Constants.URLS.ATHENA.USERS, params, header);
};

export const getUser = (params: any) => {
  let url = Functions.toURL({
    url: Constants.URLS.ATHENA.USERS,
    id: params.id,
  });
  return Http.get(url, header);
};

export const getUserData = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.ATHENA.DATA,
    id: params.id,
  });
  return Http.get(url, header);
};

export default {
  createUser,
  getUser,
  getUserData,
};