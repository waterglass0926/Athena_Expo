import * as Sentry from '@sentry/react-native';
import analytics from '@react-native-firebase/analytics';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const fetchLyrics = (artistName: string, songName: string) => {
  const uri = `https://azlyrics.com/lyrics/${artistName}/${songName}.html`;
  fetch(uri)
    .then(response => {
      return response;
    })
    .catch(error => {
      return error;
    });
};

export const getLyrics = async song => {
  try {
    let lyric = '';
    if (song.artist && song.title) {
      lyric = fetchLyrics(song.artist, song.title);
    };
    return lyric;
  } catch (error) {
    return error;
  };
};

export async function validateAccessToken(token: string) {
  const validationUrl = `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${token}`;
  const response = await fetch(validationUrl);
  const message = await response.json();
  if ('error' in message) {
    log.error('validateAccessToken', message);
    return false;
  };
  return true;
};

export async function getAccessToken() {
  const token = await AsyncStorage.getItem('@token');
  const isValid = await validateAccessToken(token);
  log.debug('getAccessToken', `Is token valid: ${isValid}`);
  if (!isValid) {
    const { accessToken } = await GoogleSignin.getTokens();
    AsyncStorage.setItem('@token', accessToken);
    return accessToken;
  };
  return token;
};

export const getGreetingTime = (currentTime = new Date()) => {
  const currentHour = currentTime.getHours();
  const splitAfternoon = 12; // 24hr time to split the afternoon
  const splitEvening = 17; // 24hr time to split the evening

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    // Between 12 PM and 5PM
    return 'Good afternoon';
  } else if (currentHour >= splitEvening) {
    // Between 5PM and Midnight
    return 'Good evening';
  };
  // Between dawn and noon
  return 'Good morning';
};

export const log = {
  error(title: any, message?: any) {
    try {
      if (__DEV__) {
        console.error(title, message);
      } else {
        Sentry.captureException(message, {
          tags: title
        });
      };
    } catch (error) {
      console.log(error);
    };
  },

  debug(title: string, message: string) {
    try {
      if (__DEV__) {
        console.log('debug: ', title, message);
      } else {
        analytics().logEvent(title, { message })
      };

    } catch (error) {
      console.log(error);
    };
  },
};