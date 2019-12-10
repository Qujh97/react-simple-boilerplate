const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const config = require('../src/config');

module.exports = merge(baseWebpackConfig, {
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ],
  devServer: {
    host: config.host,
    port: config.port,
    proxy: {
      '/api': {
        target: config.apiUrl, // 将 localhost:port/api 代理到这个网址
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: { '^/api': '' }, // 重写路径，防止/api带入最终url
      }
    }
  }, // 开发服务器配置
  mode: 'development' // 模式配置
});
