import Constants from '@/constants';
import { Http } from '@/utils/http';
import Functions, { Tokens } from '@/utils';

const header = {
  'Content-Type': 'application/json',
  'Authorization': `${Tokens.userToken}`,
};

export const getWorkouts = (params) => {
  let url = Functions.toURL({
    url: Constants.URLS.FITNESS.V1.WORKOUTS,
  });
  return Http.get(url, header);
};

export default {
  getWorkouts,
};