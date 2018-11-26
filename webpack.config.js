var webpack = require('webpack');
var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = path.join(__dirname, 'public');
var APP_DIR = path.join(__dirname, 'src');

const VENDOR_LIBS = [
  'react', 'react-dom', 'react-router-dom'
];

var config = {
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
    compress: true, // compress with gzip
    disableHostCheck: false, // prevents attacks
    open: true, // automatically launches in browser
    inline: true,
    port: 9001,
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

// const webpack = require('webpack');
// const path = require('path');
// const TransferWebpackPlugin = require('transfer-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//
//
// const config = {
//   // Entry points to the project
//   entry: [
//     // only- means to only hot reload for successful updates
//     'webpack/hot/only-dev-server',
//     './src/app/index.js'
//   ],
//   // Server Configuration options
//   devServer: {
//     publicPath: '/',
//     contentBase: 'src/www', // Relative directory for base of server
//     historyApiFallback: true, // 404s will fallback to /index.html
//     hot: true, // Live-reload
//     inline: true,
//     compress: true, // compress files with gzip
//     port: 3000, // Heroku: 8080, Localhost: 3000 Port Number
//     host: 'localhost', // Change to '0.0.0.0' for external facing server
//     stats: 'normal' // 'normal'
//   },
//   stats: 'normal',
//   devtool: 'eval',
//   output: {
//     path: path.resolve(__dirname), // Path of output file
//     filename: 'index.js'
//   },
//   plugins: [
//     // Enables Hot Modules Replacement
//     new webpack.HotModuleReplacementPlugin(),
//     // Moves files
//     new TransferWebpackPlugin([
//       {from: 'www'}
//     ], path.resolve(__dirname, 'src')),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           cacheDirectory: true,
//         },
//       },
//     ],
//   },
// };
//
// module.exports = config;
