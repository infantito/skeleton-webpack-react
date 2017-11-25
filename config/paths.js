'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolvePath(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

const env = process.env.NODE_ENV;

const vendor = ['react', 'react-dom'];

if (env !== 'production') {
  vendor.push('babel-polyfill');
}

module.exports = {
  context: resolvePath('src/'),
  script: resolvePath('src/index.jsx'),
  style: resolvePath('src/styles/style.pcss'),
  template: resolvePath('public/index.html'),
  fonts: resolvePath('src/fonts/'),
  images: resolvePath('src/images/'),
  favicon: resolvePath('public/favicon.ico'),
  vendor,
  build: resolvePath('build'),
  port: process.env.PORT || 8080
};
