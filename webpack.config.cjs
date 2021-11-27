const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  },
  resolve: {
    fallback: {
      fs: false,
      path: false,
      os: false,
      http: false,
      url: false,
    },
  },
};

module.exports = config;
