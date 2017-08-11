const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  webpack: (config, options, webpack) => {
    config.plugins.push(
      new BabiliPlugin()
    );
    return config;
  },
};
