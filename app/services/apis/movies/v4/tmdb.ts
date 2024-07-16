import Api from '@/utils/tmdb-api';
import { MOVIEDB_API_KEY } from '@env';

const API_BASE = 'https://api.themoviedb.org/3';

const tmdbApi = new Api({
  baseUrl: API_BASE,
  searchParams: { api_key: MOVIEDB_API_KEY },
});

export default tmdbApi;
