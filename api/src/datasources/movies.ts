import { RESTDataSource } from 'apollo-datasource-rest';

import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const movieAdapter = new FileSync('./data/movies.json');
const movieDatabase: any = low(movieAdapter).get('movies');

const creditAdapter = new FileSync('./data/credits.json');
const creditDatabase: any = low(creditAdapter).get('results');

interface Credit {
  id: string;
  name: string;
  character?: string;
  profile_path?: string;
}

interface Movie {
  id: string;
  title: string;
  overview?: string;
  backdrop_path?: string;
  poster_path?: string;
  popularity: number;
  favorite: boolean;
  cast?: Credit[];
}

class MovieDataSource extends RESTDataSource {
  apiKey: string = '';
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.apiKey = String(process.env.TMDB_API_KEY);
  }

  async nowPlaying() {
    const response = await this.get(
      `movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`,
    );

    return response.results || [];
  }

  async popular() {
    const response = await this.get(
      `movie/popular?api_key=${this.apiKey}&language=en-US&page=1`,
    );

    return response.results || [];
  }

  async movieById(id: number) {
    const response = await this.get(
      `movie/${id}?api_key=${this.apiKey}&language=en-US`,
    );

    return response;
  }

  async getCredits(id: number) {
    const response = await this.get(
      `movie/${id}/credits?api_key=${this.apiKey}&language=en-US`,
    );

    return response;
  }

  toggleFavorite(id: number) {
    // implement me
  }
}

export default MovieDataSource;
