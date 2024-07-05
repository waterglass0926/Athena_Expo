import AsyncStorage from '@react-native-async-storage/async-storage';

import { LANGUAGES } from './translate';

const LANGUAGE_KEY = '@language';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log('Error storing data', error);
  }
};

const getData = async (key, setter, setter2) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      if (setter !== null || setter !== undefined) {
        setter(value);
      }
      if (setter2 !== null || setter2 !== undefined) {
        setter2(
          LANGUAGES.map(function (lan) {
            return lan.key;
          }).indexOf(value),
        );
      }
    } else {
      storeData(LANGUAGE_KEY, 'en');
    }
  } catch (error) {
    console.log('Error retrieving data', error);
  }
};

export { storeData, getData, LANGUAGE_KEY };