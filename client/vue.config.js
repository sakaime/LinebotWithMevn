const path = require('path');

module.exports ={
  outputDir: path.resolve(__dirname, '../server/public'),
  devServer: {
    proxy: {
      '/api': {
        target: 'http://192.168.33.10:5000'
      }
    }
  }
}