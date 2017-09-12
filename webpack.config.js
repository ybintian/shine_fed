const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        use: {
          loader: "babel-loader",
        },
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('版权所有，翻版必究'),
    new HtmlWebpackPlugin({
        title: 'shine',
        template: __dirname + "/src/index.tmpl.html",
        filename: path.resolve(__dirname, './dist/index.html')
    })
  ],
  resolve: {
    modules: [
      './src',
      'node_modules',
    ],
    extensions: ['.json', '.js', '.jsx'],
  }
}