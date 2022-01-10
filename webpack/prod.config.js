const CompressionWebpackPlugin = require("compression-webpack-plugin");

const addBuildConfig = () => (config) => {
  if (process.env.NODE_ENV === "production") {
    config.devtool = false;
    config.plugins.push(
      new CompressionWebpackPlugin({
        test: /\.(js|css|html|png|jpg)$/,
        threshold: 10240,
      })
    );
  }

  return config;
};

module.exports = {
  addBuildConfig,
};
