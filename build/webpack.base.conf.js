const path = require('path');
const config = require('./config');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: ['babel-polyfill','./src/main.jsx']
  },
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath  : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    stats: { colors: true },
    port: config.dev.port,
    publicPath: config.dev.assetsPublicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(__dirname, '../src/components'),
      scss: path.resolve(__dirname, '../src/scss')
    }
  },
  plugins: [
    new Dotenv({
      path: path.join(process.cwd(), process.env.NODE_ENV + '.env')   
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use:[
          {
            loader: 'babel-loader',
          },
          {
            loader: 'eslint-loader',
            options: {
              configFile: path.resolve('./.eslintrc')
            }
          }
        ]
      },
      {
        test: /\.scss?$/,
        use:[
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 2,
              localIdentName: '[name]__[local]'
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
