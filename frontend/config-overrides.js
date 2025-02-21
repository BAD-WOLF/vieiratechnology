const path = require('path');

module.exports = function override(config, env) {
  // Adicione a configuração de fallback
  config.resolve.fallback = {
    "path": require.resolve("path-browserify")
  };
  return config;
};
