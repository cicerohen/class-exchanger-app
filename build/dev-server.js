'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const devWebpackConfig = require('./webpack.dev.conf');
const compiler = webpack(devWebpackConfig);

new WebpackDevServer(compiler, devWebpackConfig.devServer)
.listen(devWebpackConfig.devServer.port, 'localhost', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Listening at localhost:' + devWebpackConfig.devServer.port);
});