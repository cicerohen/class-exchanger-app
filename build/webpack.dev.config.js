const path = require('path');
const DashboardPlugin = require('webpack-dashboard/plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.base.config');
const merge = require('webpack-merge');
const pkgJson = require('../package.json');

module.exports = merge(baseWebpackConfig, {
  entry: {
    seed: path.resolve(__dirname, '../src/seed/main.jsx'),
  },
  output: {
    path: path.resolve(__dirname, '../src'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  plugins: [
    new BundleAnalyzerPlugin(),
    new DashboardPlugin({
      title: pkgJson.name,
    }), 
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../src'),
    historyApiFallback: true,
    stats: "errors-only",
    port: 8080,
    compress: true,
  },
});
