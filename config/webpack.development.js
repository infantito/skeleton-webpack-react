'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const paths = require('./paths');
const localhost = require('./ip');

// Settings by developer
const DEV_SERVER_PORT = process.env.PORT || 3000;

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  context: paths.context,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${localhost}:${DEV_SERVER_PORT}`,
    'webpack/hot/only-dev-server',
    paths.appIndexJs,
    paths.appStyle
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].bundle.js'
    // When you want to show your assets with domain
    // publicPath: `http://${localhost}:${DEV_SERVER_PORT}/`
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
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [require('autoprefixer')]
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
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
              }
            }
          }
        ]
      },
      {
        test: /\.(eot|ttf|otf|svg|woff2?)(\?.*)?$/,
        include: paths.appFonts,
        exclude: [/node_modules/],
        use: 'file-loader?name=[name].[ext]&outputPath=static/css/fonts/'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"development"' }),
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
  },
  devServer: {
    contentBase: paths.context,
    // publicPath: `http://0.0.0.0:${DEV_SERVER_PORT}`,
    compress: true,
    host: '0.0.0.0',
    disableHostCheck: true,
    historyApiFallback: true,
    port: DEV_SERVER_PORT,
    useLocalIp: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
    // Don't refresh if hot loading fails. Good while
    // implementing the client interface.
    // hotOnly: true,
    inline: true, // If hotOnly ys false, So inline must be false
    // If you want to refresh on errors too, set
    hot: true,
    noInfo: false,
    open: true,
    stats: 'errors-only',
    overlay: {
      warnings: true,
      errors: true
    }
  }
};
