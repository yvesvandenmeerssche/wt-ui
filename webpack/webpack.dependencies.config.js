const webpack = require('webpack');
const path = require('path');
const {version} = require('../package');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const precss = require('precss');
const postcssCssnext = require('postcss-cssnext');

const DIR_ROOT = path.join(__dirname, '../');
const DIR_SOURCE = path.resolve(DIR_ROOT, 'src') + '/';
const DIR_PUBLIC = path.resolve(DIR_ROOT, 'dist') + '/';

console.log('Building dist/full.js');

module.exports = {
  entry: [ DIR_SOURCE + 'css/app.scss'],
  output: {
    path: DIR_PUBLIC,
    publicPath: DIR_PUBLIC,
    filename: 'full.js',
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
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/'
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
      chunkFilename: "[id].css"
    })
  ]
}
