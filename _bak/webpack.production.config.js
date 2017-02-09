var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // entry: __dirname + "/app/main.js",
  // output: {
  //   path: __dirname + "/build",
  //   filename: "bundle.js"
  // },
  //入口文件
  entry: {
    app: ["./app/main.js"]
  },
  //出口文件
  output: {
    path: path.resolve(__dirname, "public"),  
    // filename: "bundles.js"
    // filename: "[name]-[hash].js"
    filename: "js/[name].js?[hash]"
  },

  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      // {
      //   test: /\.css$/,
      //   loader: 'style!css?modules!postcss'
      // }
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules!postcss') //使用ExtractTextPlugin
      }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // new HtmlWebpackPlugin({
    //   template: __dirname + "/app/index.html"
    // }),
    //生成html文件
    new HtmlWebpackPlugin({
      template:  path.resolve(__dirname, "./app/index.html")//new 一个这个插件的实例，并传入相关的参数
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    new webpack.optimize.UglifyJsPlugin(),
    // new ExtractTextPlugin("style.css")
    // new ExtractTextPlugin("[name]-[hash].css")
    new ExtractTextPlugin('css/[name].css?[contenthash]')
  ],

}


