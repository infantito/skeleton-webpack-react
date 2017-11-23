'use strict';

const path = require('path');
const fs = require('fs');

const appDirectory = fs.realpathSync(process.cwd());

function resolvePath(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

module.exports = {
  context: resolvePath('src/'),
  script: resolvePath('src/index.jsx'),
  style: resolvePath('src/styles/style.pcss'),
  template: resolvePath('public/index.html'),
  fonts: resolvePath('src/fonts/'),
  images: resolvePath('src/images/'),
  favicon: resolvePath('public/favicon.ico'),
  vendor: ['react', 'react-dom', 'babel-polyfill'],
  build: resolvePath('build'),
  port: process.env.PORT || 8080
};
