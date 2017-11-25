'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  context,
  fonts,
  favicon,
  template
} = require('./paths');

module.exports = {
  context,
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: context,
        exclude: [/node_modules/],
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.(eot|ttf|otf|svg|woff2?)(\?.*)?$/,
        include: fonts,
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Get started React',
      favicon,
      inject: true,
      hash: true,
      template,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'js/vendor.js',
      minChunks: 2
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  resolve: {
    modules: [
      context,
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.css', '.scss', '.pcss', '.json']
  }
};
