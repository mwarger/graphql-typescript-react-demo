import { gql } from '@apollo/client';

export const MOVIE_FRAGMENT = gql`
  fragment Movie on Movie {
    id
    title
    overview
    poster_path
    backdrop_path
    favorite
    popularity
    cast {
      name
    }
  }
`;

export const NOW_PLAYING = gql`
  query nowPlaying {
    nowPlaying {
      ...Movie
    }
  }
  ${MOVIE_FRAGMENT}
`;

export const POPULAR = gql`
  query popular {
    popular {
      ...Movie
    }
  }
  ${MOVIE_FRAGMENT}
`;
