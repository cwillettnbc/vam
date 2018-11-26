const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.join(__dirname, 'public');
const APP_DIR = path.join(__dirname, 'src');

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router-dom'
];

const config = {
  mode: 'none',
  entry: {
    bundle: APP_DIR + '/index.js',
    vendor: VENDOR_LIBS
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader'
      }
    ],
  },
  devServer: {
    publicPath: '/',
    contentBase: BUILD_DIR, // where files are published
    historyApiFallback: true, // 404s will fallback to /index.html
    compress: true, // compress with gzip
    disableHostCheck: false, // prevents attacks
    open: true, // automatically launches in browser
    inline: true,
    port: 3000,
    host: 'localhost', // Change to '0.0.0.0' for external facing server
    stats: 'normal', // 'normal'
    hot: true // enables hot loading
  },
  plugins: [
    new htmlWebpackPlugin({
      template: 'index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = config;