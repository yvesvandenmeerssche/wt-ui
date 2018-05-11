const webpack = require('webpack');
const path = require('path');
const {version} = require('../../package');

const CopyWebpackPlugin = require('copy-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlMinifier = require('html-minifier').minify
const WorkboxPlugin = require('workbox-webpack-plugin');

const DIR_ROOT = path.join(__dirname, '../../');
const DIR_SOURCE = path.resolve(DIR_ROOT, 'src') + '/';
const DIR_PUBLIC = path.resolve(DIR_ROOT, 'public') + '/';

const GIT_REV = process.env.GIT_REV || 'unknown';
const VERSION_NUMBER = version || '0.0.0';

console.log('Building App ... \n================\n');

module.exports = {
  entry: [
    'babel-polyfill',
    DIR_SOURCE + 'index.js'
  ],
  module: {
    loaders: [
      {
      test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
          {
            loader: 'postcss-loader',
            options: { config: { path: './webpack/prod/' } }
          },
          {loader: 'sass-loader'}
        ]
      }
    ]
  },
  output: {
    path: DIR_PUBLIC,
    publicPath: DIR_PUBLIC,
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[name].[chunkhash].js',
    publicPath: ''
  },
  devServer: {
    contentBase: DIR_PUBLIC,
    historyApiFallback: true
  },
  plugins: [
    // Copy files from /src to /public
    new CopyWebpackPlugin([
      { from: DIR_SOURCE + 'manifest.json', to: DIR_PUBLIC + 'manifest.json' },
      { from: DIR_SOURCE + 'img/', to: DIR_PUBLIC + 'img/' },
      { from: DIR_SOURCE + 'font/', to: DIR_PUBLIC + 'font/' },
    ]),

    // Optimize the images
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),

    // Minify JavaScript files
    new UglifyJsPlugin({ test: /\.js($|\?)/i }),

    // Create and minify index.html in /public
    new HtmlWebpackPlugin({
      filename: DIR_PUBLIC + 'index.html',
      template: DIR_SOURCE + 'index.template.html',
      minify: {
        collapseWhitespace: true,
        html5: true,
        minifyCSS: true,
        // minifyJS: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeAttributeQuotes: true
      }
    }),
    new webpack.DefinePlugin({
      'GIT_REV': JSON.stringify(GIT_REV),
      'VERSION_NUMBER': JSON.stringify(VERSION_NUMBER),
    }),

    // Generate a service worker config file
    // Ref: https://developers.google.com/web/tools/workbox/guides/get-started
    new WorkboxPlugin.GenerateSW()

  ]
}
