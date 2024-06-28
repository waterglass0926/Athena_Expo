const BASEURL = {
  ATHENA: 'https://api.athena.com/v1',
  STRIPE_API_URL: 'https://expo-stripe-server-example.glitch.me',
};

export default URLS = {
  ATHENA: {
    BASEURL: BASEURL.ATHENA,
    USER: `${BASEURL.ATHENA}/user`
  },
  UBEREATS: {
    BASEURL: BASEURL.STRIPE_API_URL
  }
};