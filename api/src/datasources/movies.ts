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

let favoriteMovies: string[] = [];
class MovieDataSource extends RESTDataSource {
  apiKey: string = '';
  constructor() {
    super();
    this.baseURL = 'https://api.themoviedb.org/3/';
    this.apiKey = String(process.env.TMDB_API_KEY);
  }

  // array to save favorite movies

  async nowPlaying() {
    const response = await this.get(
      `movie/now_playing?api_key=${this.apiKey}&language=en-US&page=1`,
    );

    const movies: Movie[] = response.results || [];

    return (
      movies.map((movie) => ({
        ...movie,
        favorite: favoriteMovies.includes(movie.id),
      })) || []
    );
  }

  async popular() {
    const response = await this.get(
      `movie/popular?api_key=${this.apiKey}&language=en-US&page=1`,
    );

    const movies: Movie[] = response.results || [];

    return (
      movies.map((movie) => ({
        ...movie,
        favorite: favoriteMovies.includes(movie.id),
      })) || []
    );
  }

  async movieById(id: string) {
    const response = await this.get(
      `movie/${id}?api_key=${this.apiKey}&language=en-US`,
    );
    const movie: Movie = response;

    movie.favorite = favoriteMovies.includes(id);

    return response;
  }

  async getCredits(id: string) {
    const response = await this.get(
      `movie/${id}/credits?api_key=${this.apiKey}&language=en-US`,
    );

    return response;
  }

  async toggleFavorite(id: string) {
    const movie: Movie = await this.movieById(id);
    if (favoriteMovies.includes(id)) {
      console.log('setting favorite to false for id', id);
      favoriteMovies = favoriteMovies.filter((movieId) => movieId !== id);
      console.log('this.favorite', favoriteMovies);

      movie.favorite = false;
    } else {
      console.log('setting favorite to true for id', id);
      movie.favorite = true;
      favoriteMovies.push(id);
      console.log('this.favorite', favoriteMovies);
    }

    return movie;
  }
}

export default MovieDataSource;
