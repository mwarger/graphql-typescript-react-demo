import { gql } from '@apollo/client';
const MOVIE_BY_ID = gql`
  query movieById($id: ID!) {
    movieById(id: $id) {
      id
      title
      overview
      poster_path
      backdrop_path
      favorite
      cast {
        id
        name
      }
    }
  }
`;
