const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    alias: {
      path: require.resolve("./src/path-browserify")
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'options',
        baseUrl: './',
        aliases: {
          'path': './src/path-browserify'
        }
      }
    }
  ]
};
