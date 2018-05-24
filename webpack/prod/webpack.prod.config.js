const webpack = require('webpack');
const path = require('path');
const {version} = require('../../package');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const precss = require('precss');
const postcssCssnext = require('postcss-cssnext');

const DIR_ROOT = path.join(__dirname, '../../');
const DIR_SOURCE = path.resolve(DIR_ROOT, 'src') + '/';
const DIR_PUBLIC = path.resolve(DIR_ROOT, 'dist') + '/';

console.log('Building dist directory ... \n===========================\n');

module.exports = {
  entry: [ DIR_SOURCE + 'css/app.scss'],
  output: {
    path: DIR_PUBLIC,
    publicPath: DIR_PUBLIC,
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              plugins() {
                return [
                  precss,
                  postcssCssnext,
                ];
           },
          }
        },
        'sass-loader'
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
          filename: "styles.css",
          chunkFilename: "[id].css"
        }),
    // Copy files from /src to /public
    new CopyWebpackPlugin([
      { from: DIR_SOURCE + 'img/', to: DIR_PUBLIC + 'img/' },
      { from: DIR_SOURCE + 'font/', to: DIR_PUBLIC + 'font/' },
    ]),
  ]
}
