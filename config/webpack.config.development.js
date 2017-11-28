'use strict';

const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const {
  build,
  context,
  images,
  script
} = require('./paths');

module.exports = webpackMerge(baseConfig, {
  devtool: 'cheap-module-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    script
  ],
  output: {
    path: build,
    filename: 'js/[name].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(p|s)?css$/,
        include: context,
        exclude: [/node_modules/],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              minimize: false,
              modules: true,
              localIdentName: '[local]',
              sourceMap: true,
              importLoaders: 1
            }
          },
          'postcss-loader?sourceMap'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        include: images,
        exclude: [/node_modules/],
        loader: 'file-loader?name=[name].[ext]&outputPath=img/'
      }
    ]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
});
