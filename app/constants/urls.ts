const BASEURL = {
  ATHENA: 'https://api.athena.com/v1',
  WORLD: 'http://192.168.101.70:3000/api',
  STRIPE_API_URL: 'https://expo-stripe-server-example.glitch.me',
  TIKTOK: 'https://api.tiktok.com/v1',
};

export default URLS = {
  ATHENA: {
    BASEURL: BASEURL.ATHENA,
    USERS: `${BASEURL.ATHENA}/users`,
  },
  WORLD: {
    USERS: `${BASEURL.WORLD}/users`,
    DATA: `${BASEURL.WORLD}/users/data`,
    PLACES: `${BASEURL.WORLD}/world/places`,
    CONTINENTS: `${BASEURL.WORLD}/world/continents`,
    COUNTRIES: `${BASEURL.WORLD}/world/countries`,
    CAPITALS: `${BASEURL.WORLD}/world/capitals`,
    POSTS: `${BASEURL.WORLD}/world/posts`,
    WORKS: `${BASEURL.WORLD}/works`,
  },
  UBEREATS: {
    BASEURL: BASEURL.STRIPE_API_URL,
  },
  TIKTOK: {
    BASEURL: BASEURL.TIKTOK,
    USERS: `${BASEURL.TIKTOK}/user`,
  },
};