'use strict';

const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: paths.context,
  entry: {
    app: [paths.appIndexJs, paths.appStyle],
    polyfill: ['babel-polyfill'],
    vendor: paths.vendor
  },
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].bundle.js'
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
        test: /\.s?(a|c)ss$/,
        include: paths.context,
        exclude: [/node_modules/],
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true,
                modules: true,
                localIdentName: '[hash:base64:5]',
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  require('autoprefixer'),
                  require('cssnano')
                ]
              }
            },
            'resolve-url-loader',
            'sass-loader?sourceMap',
            {
              loader: 'stylefmt-loader',
              options: {
                config: '.stylelintrc'
              }
            }
          ],
          publicPath: '../../'
        })
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
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      title: paths.titleHtml,
      favicon: paths.appFavicon,
      inject: true,
      hash: true,
      template: paths.appHtml,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      }
    }),
    new ExtractTextPlugin({
      filename: 'static/css/[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'static/js/vendor.js',
      minChunks: 2
    }),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false, // By default false, Keep the sentences names
      compress: {
        screw_ie8: false,
        dead_code: true,
        drop_debugger: true,
        warnings: false,
        if_return: true,
        booleans: true
      },
      output: {
        screw_ie8: false,
        beautify: false,
        comments: false
      },
      exclude: [/\.min\.js$/gi]
    })
  ],
  resolve: {
    modules: [
      paths.context,
      'node_modules'
    ],
    extensions: ['.js', '.json', '.jsx']
  },
  performance: {
    hints: false
  }
};
