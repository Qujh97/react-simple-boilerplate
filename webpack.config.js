const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.join(ROOT_PATH, '/src/');
const BUILD_PATH = path.join(ROOT_PATH, '/build/');

const autoprefixer = require('autoprefixer');

const webpackConfig = {
  entry: APP_PATH, // 入口文件
  output: {
    filename: 'bundle.js', // 打包后的文件名称
    path: BUILD_PATH // 打包后的目录，必须是绝对路径
  }, // 出口文件
  module: {
    rules: [
      {
        test: /\.css$/,
        include: APP_PATH,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer]
            },
          }
        ]
      },
      {
        test: /\.less$/,
        include: APP_PATH,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpe?g|png)$/,
        include: APP_PATH,
        use: ['url-loader']
      },
      {
        test: /\.(jsx|js)$/,
        include: APP_PATH,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  }, // 处理对应模块
  plugins: [
    new HtmlWebpackPlugin({
      template: `${APP_PATH}/template/index.html`,
      hash: true
    })
  ], // 对应的插件
  devServer: {
    host: 'localhost',
    port: '3000',
    proxy: {
      '/weather': {
        target: 'http://v.juhe.cn',
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
      }
    }
  }, // 开发服务器配置
  mode: 'development' // 模式配置
};

module.exports = webpackConfig;
