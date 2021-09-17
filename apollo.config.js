module.exports = {
  client: {
    service: {
      name: 'now playing app',
      url: 'http://localhost:4000/graphql',
    },
    includes: ['./app/src/**/graphql.ts', './app/src/**/*.tsx'], // array of glob patterns
    excludes: ['./app/**/src/generated/**'],
  },
};
