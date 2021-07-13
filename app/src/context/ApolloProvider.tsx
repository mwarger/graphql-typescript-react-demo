import React from 'react';
import {
  ApolloProvider as Provider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';

export function ApolloProvider({ children }: { children: React.ReactNode }) {
  const cache = new InMemoryCache();
  const client = new ApolloClient({
    cache,
    link: new HttpLink({
      uri: '/graphql',
    }),
  });

  return <Provider client={client}>{children}</Provider>;
}
