'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const localhost = require('./ip');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  context: paths.context,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    paths.appIndexJs,
    paths.appMainStyle
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].bundle.js',
    // When you want to show your assets with domain
    publicPath: `http://${localhost}:${paths.port}/`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.context,
        exclude: [/node_modules/],
        use: ['babel-loader?cacheDirectory']
      },
      {
        test: /\.(p|c)?css$/,
        include: paths.appStyle,
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
          'postcss-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        include: paths.appImages,
        exclude: [/node_modules/],
        use: [
          // 'file-loader?name=[hash:10].[ext]&outputPath=static/img/',
          {
            loader: 'url-loader',
            options: {
              limit: 10000, // 4096 => 4kb
              name: '[hash:10].[ext]',
              outputPath: 'static/img/'
            }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              bypassOnDebug: true,
              mozjpeg: {
                quality: 65,
                progressive: true
              },
              optipng: {
                optimizationLevel: 7
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              svgo: {
                plugins: [
                  {
                    removeViewBox: false
                  },
                  {
                    removeEmptyAttrs: false
                  }
                ]
              },
              gifsicle: {
                interlaced: false
              },
              // Specifying webp here will create a WEBP version of your JPG/PNG images
              webp: {
                quality: 75
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|otf|svg|woff2?)(\?.*)?$/,
        include: paths.appFonts,
        exclude: [/node_modules/],
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts/'
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      title: paths.titleHtml,
      favicon: paths.appFavicon,
      inject: true,
      template: paths.appHtml
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    modules: [
      paths.context,
      'node_modules'
    ],
    extensions: ['.js', '.json', '.jsx']
  }
};
