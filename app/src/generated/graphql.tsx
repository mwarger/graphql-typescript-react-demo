import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};

export enum CacheControlScope {
  Private = 'PRIVATE',
  Public = 'PUBLIC'
}

export type Credit = {
  __typename?: 'Credit';
  character: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  profile_path?: Maybe<Scalars['String']>;
};

export type Movie = {
  __typename?: 'Movie';
  backdrop_path?: Maybe<Scalars['String']>;
  cast?: Maybe<Array<Credit>>;
  favorite?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  overview: Scalars['String'];
  /** @deprecated Use favorite instead. */
  popularity?: Maybe<Scalars['String']>;
  poster_path: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  toggleFavoriteMovie?: Maybe<Movie>;
};


export type MutationToggleFavoriteMovieArgs = {
  movieId: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  cast?: Maybe<Array<Maybe<Credit>>>;
  hello?: Maybe<Scalars['String']>;
  movieById?: Maybe<Movie>;
  nowPlaying?: Maybe<Array<Movie>>;
  popular?: Maybe<Array<Movie>>;
};


export type QueryCastArgs = {
  movieId: Scalars['ID'];
};


export type QueryMovieByIdArgs = {
  id: Scalars['ID'];
};

export type MovieByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type MovieByIdQuery = { __typename?: 'Query', movieById?: { __typename?: 'Movie', id: string, title: string, overview: string, poster_path: string, backdrop_path?: string | null, favorite?: boolean | null, cast?: Array<{ __typename?: 'Credit', id: string, name: string }> | null } | null };

export type ToggleFavoriteMutationVariables = Exact<{
  movieId: Scalars['ID'];
}>;


export type ToggleFavoriteMutation = { __typename?: 'Mutation', toggleFavoriteMovie?: { __typename?: 'Movie', id: string, favorite?: boolean | null } | null };

export type NowPlayingQueryVariables = Exact<{ [key: string]: never; }>;


export type NowPlayingQuery = { __typename?: 'Query', nowPlaying?: Array<{ __typename?: 'Movie', id: string, title: string, overview: string, poster_path: string, backdrop_path?: string | null, favorite?: boolean | null, popularity?: string | null, cast?: Array<{ __typename?: 'Credit', name: string }> | null }> | null };

export type MovieFragment = { __typename?: 'Movie', id: string, title: string, overview: string, poster_path: string, backdrop_path?: string | null, favorite?: boolean | null, popularity?: string | null, cast?: Array<{ __typename?: 'Credit', name: string }> | null };

export type PopularQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularQuery = { __typename?: 'Query', popular?: Array<{ __typename?: 'Movie', id: string, title: string, overview: string, poster_path: string, backdrop_path?: string | null, favorite?: boolean | null, popularity?: string | null, cast?: Array<{ __typename?: 'Credit', name: string }> | null }> | null };

export const MovieFragmentDoc = gql`
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
    ...Movie
  }
}
    ${MovieFragmentDoc}`;

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