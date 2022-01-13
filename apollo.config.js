module.exports = {
  client: {
    service: {
      name: 'now playing app',
      localSchemaFile: './schema.graphql',
    },
    includes: ['./app/src/**/graphql.ts', './app/src/**/*.tsx'], // array of glob patterns
    excludes: ['./app/**/src/generated/**'],
  },
};
