import {
  QueryResolvers,
  MutationResolvers,
  MovieResolvers,
} from '../generated/graphql-types';

const resolvers: {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
  Movie: MovieResolvers;
} = {
  Query: {
    // TODO: what possible resolvers exist?

    nowPlaying(_parent, _args, context, _info) {
      return context.dataSources.movieDataSource.nowPlaying();
    },
    popular(_parent, _args, context, _info) {
      return context.dataSources.movieDataSource.popular();
    },
    movieById(_parent, { id }, { dataSources }, _info) {
      return dataSources.movieDataSource.movieById(+id);
    },
  },
  Mutation: {
    toggleFavoriteMovie: async (_parent, args, context, _info) => {
      return context.dataSources.movieDataSource.toggleFavorite(+args.movieId);
    },
  },
  Movie: {
    cast: async (movie, _args, { dataSources }) => {
      const credits = await dataSources.movieDataSource.getCredits(movie.id);
      return credits.cast || [];
    },
  },
};

export default resolvers;
