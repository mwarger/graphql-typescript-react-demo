# graphql-typescript-react-demo

This is used as the basis example for a couple talks/demos...

Rock-Solid Component with GraphQL - slides here: https://slides.com/mathewwarger/rock-solid-components

Rethinking REST Practices with GraphQL - slides here: https://slides.com/mathewwarger/rethinking-rest-practices-with-graphql

## Usage and Codegen

Run `yarn install` in the root as well as the `app` and `api` directories. Run `yarn api` to start the API (to actually run queries for data, you'll need a Movies Database API key). For codegen, you will not need to worry about it.

### Codegen

Run yarn to install all dependencies.

The `codegen.yml` file will be what handles generating TS types for queries and mutations.

The important part of this file is

```
app/src/generated/graphql.tsx:
    documents: app/src/**/*.tsx
    plugins:
      - 'typescript'
      - 'typescript-operations'
      - 'typescript-react-apollo'
```

This says to generate a file at `app/src/generated/graphql.tsx` based on the documents (`gql` tagged queries and mutations) that exist at `app/src/**/*.tsx` (file glob) and apply the listed plugins for the generation of code and types.

For example, check out `app/src/pages/graphql.ts`. There are two queries and a fragment for grabbing some movies.

Run the `codegen` command from the root. This will use the queries and mutations provided to created types and hooks and put it in the generated folder (`app/src/generated/graphql.tsx`). You can look in there for the output.

This is used in the `NowPlaying.tsx` component. Types for fragments are also generated. We map over the movies retured in the NowPlaying component and output MoviePoster components. Checkout `MoviePoster.tsx` for an example of using a generated fragment type.
