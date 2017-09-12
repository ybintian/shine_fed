const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.js');
const merge = require('webpack-merge');

module.exports = merge(common,{
  devtool: 'eval-source-map',
  devServer: {
    contentBase: "./dist",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()//热加载插件
  ]
});