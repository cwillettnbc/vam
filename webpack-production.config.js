const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.join(__dirname, 'public');
const APP_DIR = path.join(__dirname, 'src');

const config = {
  entry: {
    main: [
      APP_DIR + '/index.js'
    ]
  },
    // Render source-map file for final build
  devtool: 'source-map',
  // output config
  output: {
    path: BUILD_DIR, // Path of output file
    filename: 'index.js', // Name of output file
  },
  plugins: [
    // Define production build to allow React to strip out unnecessary checks 
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production'),
        'PORT': JSON.stringify(process.env.PORT)
      }
    }),
    // Minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
        },
      },
    ],
  },
};

module.exports = config;
