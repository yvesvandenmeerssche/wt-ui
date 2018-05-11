const webpack = require('webpack');
const path = require('path');
const {version} = require('../../package');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

const DIR_ROOT = path.join(__dirname, '../../');
const DIR_SOURCE = path.resolve(DIR_ROOT, 'src') + '/';
const DIR_PUBLIC = path.resolve(DIR_ROOT, 'public') + '/';

const GIT_REV = process.env.GIT_REV || 'unknown';
const VERSION_NUMBER = version || '0.0.0';

console.log('Starting App ... \n================\n');

module.exports = {
  entry: [
    'babel-polyfill',
    DIR_SOURCE + 'index.js'
  ],
  module: {
    rules: [
      {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'postcss-loader',
            options: {
              config: { path: DIR_ROOT + 'webpack/dev/' },
              sourceMap: true,
            }
          },
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  output: {
    path: DIR_PUBLIC,
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: DIR_PUBLIC,
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: DIR_PUBLIC + 'index.html',
      template: DIR_SOURCE + 'index.template.html'
    }),

    // Create index.html in /public
    new HtmlWebpackHarddiskPlugin(),
    new webpack.DefinePlugin({
      'GIT_REV': JSON.stringify(GIT_REV),
      'VERSION_NUMBER': JSON.stringify(VERSION_NUMBER),
    })
  ]
}
