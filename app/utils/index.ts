export class Tokens {
  static clientId = 'waGiFOvU969D2xl60c_vOvEKTcbPiA0BXcgiC_PeDKk';
  static unsplashToken = 'nllcFdEQkChHOLqrK9iw4AxrC8Hv-N7L8_ada60RgsU';
  static bearerToken = 'v2/RjRsQXRUQWpyQ3dndjZESFpUMmZNQWozU2NZdEFTdlQvMzk3NDgwNzM5L2N1c3RvbWVyLzQvZE41T2UwTzJ4UkJ2T1F4WUJZeXQ4UnVUN3lpWW9ncmdKNG9TUlM4QmdlSTZPaWdSQ0x1ajBKS3V0elYzaEhXS25kci1kaHNwLUt2WHhjRWlNSFVXTTFaT3JYZHJvMmpuMW9BUGltUkpDVXRReTQ0WUpqSWxwYXhSNnZranFTbldsdnhoOXdHTVlYR2Y2cXUzRE1FQmJTeWxPeFQ2N3JqdTkxSVBRVGxBaGRtNlZSYzhwSmtyeUZkN0lwU3BJUnN3cjZBdVRGRnVxSENWc2FuOEotcWQyZy9GTU5lTDhOTVFvajQ3T29feVJNWmpB';
  static userToken = '';
};

export const navOptionHandler = () => ({
  headerShown: false,
});

export const isEmpty = (data: string | object | any[]) => {
  return !data || data == undefined || data == null ||
    (typeof data === 'string' && data == '') ||
    (Array.isArray(data) && data.length === 0);
};

export const isEmail = (email: string) => {
  let email_ = email.trim();
  var expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return expression.test(String(email_).toLowerCase());
};

export const isShort = (data: string, length: number) => {
  return data?.length > length ? `${data.substring(0, length)}...` : data;
};

export const isColor = () => {
  const randomColor = Math.floor(Math.random() * 0xffffff).toString(16);
  return "#" + randomColor.padStart(6, '0');
};

export const isOpacity = (hex, alpha = 1) => {
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Construct the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const isLog = (type: number, message: string) => {
  if (type === 1) {
    console.log(`\x1b[32mSuccess: `, `\x1b[37m${message}`);
  } else if (type === 2) {
    console.log(`\x1b[31mError: `, `\x1b[37m${message}`);
  } else if (type === 3) {
    console.log(`\x1b[33mInfo: `, `\x1b[37m${message}`);
  } else if (type === 4) {
    console.log(`\x1b[35mAthena: `, `\x1b[37m${message}`);
  } else if (type === 5) {
    console.log(`\x1b[36mQueen: `, `\x1b[37m${message}`);
  }
};

interface URLParams {
  url: string;
  id?: string;
  query?: Record<string, any>;
};

export const toURL = ({ url, id, query }: URLParams) => {
  let newURL = `${url}${id ? `/${id}` : ''}${query && Object.keys(query).length ? '?' : ''}`;
  const queryParams = [];

  if (query) {
    for (const key of Object.keys(query)) {
      const value = query[key];
      if (value != null) {
        if (Array.isArray(value)) {
          value.forEach(item => queryParams.push(`${key}=${item}`));
        } else {
          queryParams.push(`${key}=${value}`);
        }
      }
    }
  };

  newURL += queryParams.join('&');
  return newURL;
};

export default {
  isEmpty,
  isEmail,
  isShort,
  isColor,
  isOpacity,
  isLog,
  toURL,
};