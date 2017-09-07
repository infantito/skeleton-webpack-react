'use strict';

const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Settings by developer
const DEV_SERVER_PORT = process.env.PORT || 3000;

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  context: paths.context,
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://0.0.0.0:${DEV_SERVER_PORT}`,
    'webpack/hot/only-dev-server',
    paths.appIndexJs,
    paths.appStyle
  ],
  output: {
    path: paths.appBuild,
    filename: 'static/js/[name].bundle.js',
    publicPath: `http://localhost:${DEV_SERVER_PORT}/`
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: paths.context,
        exclude: [/node_modules/],
        use: ['babel-loader']
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
        include: paths.context,
        exclude: [/node_modules/],
        use: ['url-loader', 'image-webpack-loader']
      },
      {
        test: /\.(eot|ttf|otf|woff2?)(\?.*)?$/,
        include: paths.context,
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
    historyApiFallback: true,
    port: DEV_SERVER_PORT,
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
