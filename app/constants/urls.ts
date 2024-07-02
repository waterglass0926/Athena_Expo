const BASEURL = {
  ATHENA: 'https://api.athena.com/v1',
  WORLD: 'http://localhost:3000/api',
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
  },
  UBEREATS: {
    BASEURL: BASEURL.STRIPE_API_URL,
  },
  TIKTOK: {
    BASEURL: BASEURL.TIKTOK,
    USERS: `${BASEURL.TIKTOK}/user`,
  },
};