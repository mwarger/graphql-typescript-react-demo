import { gql } from '@apollo/client';
const TOGGLE_FAVORITE = gql`
  mutation ToggleFavorite($movieId: ID!) {
    toggleFavoriteMovie(movieId: $movieId) {
      id
      favorite
    }
  }
`;
