import { gql } from '@apollo/client';

export const MOVIE_FRAGMENT = gql`
  fragment MovieFragment on Movie {
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
      ...MovieFragment
    }
  }
  ${MOVIE_FRAGMENT}
`;

export const POPULAR = gql`
  query popular {
    popular {
      ...MovieFragment
    }
  }
  ${MOVIE_FRAGMENT}
`;
