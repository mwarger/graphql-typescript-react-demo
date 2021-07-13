import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  nowPlaying?: Maybe<Array<Movie>>;
  popular?: Maybe<Array<Movie>>;
  movieById?: Maybe<Movie>;
  cast?: Maybe<Array<Maybe<Credit>>>;
};


export type QueryMovieByIdArgs = {
  id: Scalars['ID'];
};


export type QueryCastArgs = {
  movieId: Scalars['ID'];
};

export type Movie = {
  __typename?: 'Movie';
  id: Scalars['ID'];
  title: Scalars['String'];
  overview: Scalars['String'];
  backdrop_path?: Maybe<Scalars['String']>;
  poster_path: Scalars['String'];
  popularity?: Maybe<Scalars['String']>;
  favorite?: Maybe<Scalars['Boolean']>;
  cast?: Maybe<Array<Credit>>;
};

export type Credit = {
  __typename?: 'Credit';
  id: Scalars['ID'];
  name: Scalars['String'];
  character: Scalars['String'];
  profile_path?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  toggleFavoriteMovie?: Maybe<Movie>;
};


export type MutationToggleFavoriteMovieArgs = {
  movieId: Scalars['ID'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type MovieByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MovieByIdQuery = (
  { __typename?: 'Query' }
  & { movieById?: Maybe<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'title' | 'overview' | 'poster_path' | 'backdrop_path' | 'favorite'>
    & { cast?: Maybe<Array<(
      { __typename?: 'Credit' }
      & Pick<Credit, 'id' | 'name'>
    )>> }
  )> }
);

export type ToggleFavoriteMutationVariables = Exact<{
  movieId: Scalars['ID'];
}>;


export type ToggleFavoriteMutation = (
  { __typename?: 'Mutation' }
  & { toggleFavoriteMovie?: Maybe<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'favorite'>
  )> }
);

export type NowPlayingQueryVariables = Exact<{ [key: string]: never; }>;


export type NowPlayingQuery = (
  { __typename?: 'Query' }
  & { nowPlaying?: Maybe<Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'title' | 'overview' | 'poster_path' | 'backdrop_path' | 'favorite' | 'popularity'>
    & { cast?: Maybe<Array<(
      { __typename?: 'Credit' }
      & Pick<Credit, 'name'>
    )>> }
  )>> }
);

export type PopularQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularQuery = (
  { __typename?: 'Query' }
  & { popular?: Maybe<Array<(
    { __typename?: 'Movie' }
    & Pick<Movie, 'id' | 'title' | 'overview' | 'poster_path' | 'backdrop_path' | 'favorite' | 'popularity'>
    & { cast?: Maybe<Array<(
      { __typename?: 'Credit' }
      & Pick<Credit, 'name'>
    )>> }
  )>> }
);


export const MovieByIdDocument = gql`
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

/**
 * __useMovieByIdQuery__
 *
 * To run a query within a React component, call `useMovieByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useMovieByIdQuery(baseOptions: Apollo.QueryHookOptions<MovieByIdQuery, MovieByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MovieByIdQuery, MovieByIdQueryVariables>(MovieByIdDocument, options);
      }
export function useMovieByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieByIdQuery, MovieByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MovieByIdQuery, MovieByIdQueryVariables>(MovieByIdDocument, options);
        }
export type MovieByIdQueryHookResult = ReturnType<typeof useMovieByIdQuery>;
export type MovieByIdLazyQueryHookResult = ReturnType<typeof useMovieByIdLazyQuery>;
export type MovieByIdQueryResult = Apollo.QueryResult<MovieByIdQuery, MovieByIdQueryVariables>;
export const ToggleFavoriteDocument = gql`
    mutation ToggleFavorite($movieId: ID!) {
  toggleFavoriteMovie(movieId: $movieId) {
    id
    favorite
  }
}
    `;
export type ToggleFavoriteMutationFn = Apollo.MutationFunction<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;

/**
 * __useToggleFavoriteMutation__
 *
 * To run a mutation, you first call `useToggleFavoriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleFavoriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleFavoriteMutation, { data, loading, error }] = useToggleFavoriteMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useToggleFavoriteMutation(baseOptions?: Apollo.MutationHookOptions<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>(ToggleFavoriteDocument, options);
      }
export type ToggleFavoriteMutationHookResult = ReturnType<typeof useToggleFavoriteMutation>;
export type ToggleFavoriteMutationResult = Apollo.MutationResult<ToggleFavoriteMutation>;
export type ToggleFavoriteMutationOptions = Apollo.BaseMutationOptions<ToggleFavoriteMutation, ToggleFavoriteMutationVariables>;
export const NowPlayingDocument = gql`
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

/**
 * __useNowPlayingQuery__
 *
 * To run a query within a React component, call `useNowPlayingQuery` and pass it any options that fit your needs.
 * When your component renders, `useNowPlayingQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNowPlayingQuery({
 *   variables: {
 *   },
 * });
 */
export function useNowPlayingQuery(baseOptions?: Apollo.QueryHookOptions<NowPlayingQuery, NowPlayingQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NowPlayingQuery, NowPlayingQueryVariables>(NowPlayingDocument, options);
      }
export function useNowPlayingLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NowPlayingQuery, NowPlayingQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NowPlayingQuery, NowPlayingQueryVariables>(NowPlayingDocument, options);
        }
export type NowPlayingQueryHookResult = ReturnType<typeof useNowPlayingQuery>;
export type NowPlayingLazyQueryHookResult = ReturnType<typeof useNowPlayingLazyQuery>;
export type NowPlayingQueryResult = Apollo.QueryResult<NowPlayingQuery, NowPlayingQueryVariables>;
export const PopularDocument = gql`
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

/**
 * __usePopularQuery__
 *
 * To run a query within a React component, call `usePopularQuery` and pass it any options that fit your needs.
 * When your component renders, `usePopularQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePopularQuery({
 *   variables: {
 *   },
 * });
 */
export function usePopularQuery(baseOptions?: Apollo.QueryHookOptions<PopularQuery, PopularQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options);
      }
export function usePopularLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PopularQuery, PopularQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PopularQuery, PopularQueryVariables>(PopularDocument, options);
        }
export type PopularQueryHookResult = ReturnType<typeof usePopularQuery>;
export type PopularLazyQueryHookResult = ReturnType<typeof usePopularLazyQuery>;
export type PopularQueryResult = Apollo.QueryResult<PopularQuery, PopularQueryVariables>;