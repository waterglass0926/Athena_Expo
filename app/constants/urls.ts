const BASEURL = {
  ATHENA: 'https://api.athena.com/v1',
  STRIPE_API_URL: 'https://expo-stripe-server-example.glitch.me',
  TIKTOK: 'https://api.tiktok.com/v1',
};

export default URLS = {
  ATHENA: {
    BASEURL: BASEURL.ATHENA,
    USER: `${BASEURL.ATHENA}/user`
  },
  UBEREATS: {
    BASEURL: BASEURL.STRIPE_API_URL
  },
  TIKTOK: {
    BASEURL: BASEURL.TIKTOK,
    USERS: `${BASEURL.TIKTOK}/user`,
  },
};