const path = require("path");

const precss = require('precss');
const postcssCssnext = require('postcss-cssnext');

const DIR_ROOT = path.join(__dirname, '../');
const DIR_SOURCE = path.resolve(DIR_ROOT, 'src') + '/';
const DIR_PUBLIC = path.resolve(DIR_ROOT, 'public') + '/';

console.log('\nGenerating Storybook ... \n========================\n');


module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
            options: { sourceMap: true }
          },
          "css-loader",
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
          "sass-loader"
        ],
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'markdown-loader' }
        ],
      },
    ]
  }
};
