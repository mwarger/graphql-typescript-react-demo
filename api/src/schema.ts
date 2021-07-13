import { gql } from 'apollo-server';

export default gql`
  type Movie {
    id: ID!
    title: String!
    overview: String!
    backdrop_path: String
    poster_path: String!
    popularity: String
    favorite: Boolean
    cast: [Credit!]
  }

  type Credit {
    id: ID!
    name: String!
    character: String!
    profile_path: String
  }

  type Query {
    hello: String
    nowPlaying: [Movie!]
    popular: [Movie!]
    movieById(id: ID!): Movie
    cast(movieId: ID!): [Credit]
  }

  type Mutation {
    toggleFavoriteMovie(movieId: ID!): Movie
  }
`;
