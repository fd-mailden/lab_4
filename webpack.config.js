require('dotenv').config();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');


module.exports = {
  entry: __dirname + "/src/index.js",
  output: {
    path: __dirname + '/dist', 
    filename: '[name].bundle.js',  
    publicPath: '/' 
  },
  module: {  
    rules: [
     
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: process.env.ASSET_IMAGES_PATH,
          },
        },
      },
      
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack index",
      template: __dirname + "/src/pages/index.html",
      inject: 'body',
      filename:"index.html"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack news",
      template: __dirname + "/src/pages/news.html",
      inject: 'body',
      filename: "news.html"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack photo",
      template: __dirname + "/src/pages/photo.html",
      inject: 'body',
      filename: "photo.html"
    }),
    new HtmlWebpackPlugin({
      title: "Webpack rozk",
      template: __dirname + "/src/pages/rozklad.html",
      inject: 'body',
      filename: "rozklad.html"
    }),
    new Dotenv(),
  
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
}
