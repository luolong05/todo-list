const devServerConfig = (config) => {
  return {
    ...config,
    compress: true,
    proxy: {
      '/todo': {
        target: 'http://localhost:8080',
        changeOrigin: true
      }
    }
  };
};

module.exports = {
  devServerConfig
};
