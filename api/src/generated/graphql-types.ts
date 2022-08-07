import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<any>;
  CacheControlScope: ResolverTypeWrapper<any>;
  Credit: ResolverTypeWrapper<any>;
  ID: ResolverTypeWrapper<any>;
  Int: ResolverTypeWrapper<any>;
  Movie: ResolverTypeWrapper<any>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<any>;
  Upload: ResolverTypeWrapper<any>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: any;
  Credit: any;
  ID: any;
  Int: any;
  Movie: any;
  Mutation: {};
  Query: {};
  String: any;
  Upload: any;
};

export type CacheControlDirectiveArgs = {
  maxAge?: Maybe<Scalars['Int']>;
  scope?: Maybe<CacheControlScope>;
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = Context, Args = CacheControlDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type CreditResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Credit'] = ResolversParentTypes['Credit']> = {
  character?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  profile_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MovieResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Movie'] = ResolversParentTypes['Movie']> = {
  backdrop_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cast?: Resolver<Maybe<Array<ResolversTypes['Credit']>>, ParentType, ContextType>;
  favorite?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  overview?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  popularity?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  poster_path?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  toggleFavoriteMovie?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<MutationToggleFavoriteMovieArgs, 'movieId'>>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  cast?: Resolver<Maybe<Array<Maybe<ResolversTypes['Credit']>>>, ParentType, ContextType, RequireFields<QueryCastArgs, 'movieId'>>;
  hello?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  movieById?: Resolver<Maybe<ResolversTypes['Movie']>, ParentType, ContextType, RequireFields<QueryMovieByIdArgs, 'id'>>;
  nowPlaying?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
  popular?: Resolver<Maybe<Array<ResolversTypes['Movie']>>, ParentType, ContextType>;
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type Resolvers<ContextType = Context> = {
  Credit?: CreditResolvers<ContextType>;
  Movie?: MovieResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Upload?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = Context> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>;
};
