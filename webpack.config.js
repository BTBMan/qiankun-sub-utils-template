const { resolve } = require('path');
const { name } = require('./package');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  output: {
    path: resolve(__dirname, './dist'),
    publicPath: '/',
    library: `${name}-[name]`,
    libraryTarget: 'umd', // 把微应用打包成 umd 库格式
  },
  devServer: {
    port: 3401,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
