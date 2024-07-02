import Constants from '@/constants';
import { Http } from '@/utils/http';
import Functions, { Tokens } from '@/utils';

const header = {
  'Content-Type': 'application/json',
  'Authorization': `${Tokens.userToken}`,
};

export const getUser = (params: any) => {
  let url = Functions.toURL({
    url: Constants.URLS.ATHENA.USERS,
    query: params,
  });
  return Http.get(url, header);
};

export default {
  getUser,
};