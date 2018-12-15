const webpack = require('webpack');
const clean = require('clean-webpack-plugin');

const config = require('./config');
const baseWebpackConfig = require('./webpack.base.conf');

module.exports = merge(baseWebpackConfig, {
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }       
        }),
        new clean([
            config.build.assetsRoot
        ]),
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false }
        })
      
    ]
});