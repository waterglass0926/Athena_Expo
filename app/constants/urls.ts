const BASEURL = {
  // ATHENA: 'https://api.athena.com/v1',
  ATHENA: 'http://192.168.101.70:3000/api',
  WORLD: 'http://192.168.101.70:3000/api',
  FITNESS: {
    V1: 'http://192.168.101.70:3000/api',
  },
  STRIPE_API_URL: 'https://expo-stripe-server-example.glitch.me',
  TIKTOK: 'https://api.tiktok.com/v1',
  FAMOUS: 'http://192.168.101.70:3000',
};

export default URLS = {
  ATHENA: {
    BASEURL: BASEURL.ATHENA,
    USERS: `${BASEURL.ATHENA}/users`,
    DATA: `${BASEURL.WORLD}/users/data`,
  },
  WORLD: {
    BASEURL: BASEURL.WORLD,
    PLACES: `${BASEURL.WORLD}/world/places`,
    CONTINENTS: `${BASEURL.WORLD}/world/continents`,
    COUNTRIES: `${BASEURL.WORLD}/world/countries`,
    CAPITALS: `${BASEURL.WORLD}/world/capitals`,
    POSTS: `${BASEURL.WORLD}/world/posts`,
    WORKS: `${BASEURL.WORLD}/works`,
  },
  FITNESS: {
    V1: {
      BASEURL: BASEURL.FITNESS.V1,
      WORKOUTS: `${BASEURL.FITNESS.V1}/fitness/workouts`
    },
  },
  UBEREATS: {
    BASEURL: BASEURL.STRIPE_API_URL,
  },
  TIKTOK: {
    BASEURL: BASEURL.TIKTOK,
    USERS: `${BASEURL.TIKTOK}/user`,
  },
  FAMOUS: {
    BASEURL: BASEURL.FAMOUS,
    QUESTIONS: `${BASEURL.FAMOUS}/api/questions`,
    IMAGES: `${BASEURL.FAMOUS}/images`,
  },
};