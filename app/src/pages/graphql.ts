import { gql } from '@apollo/client';

export const NOW_PLAYING = gql`
  query nowPlaying {
    nowPlaying {
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
  }
`;

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

export const POPULAR = gql`
  query popular {
    popular {
      ...Movie
    }
  }
  ${MOVIE_FRAGMENT}
`;
