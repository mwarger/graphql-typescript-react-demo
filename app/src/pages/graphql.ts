import { gql } from '@apollo/client';

// TODO: create fragment

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

export const POPULAR = gql`
  query popular {
    popular {
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
