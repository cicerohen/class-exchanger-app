const path = require('path');

module.exports = {
  build: {
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsPublicPath: '/'
  },
  dev: {
    port: 8080,
    assetsPublicPath: '/'
  }
}

