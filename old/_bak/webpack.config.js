// module.exports = {
//   //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项 eval-source-map用于开发阶段环境
//   devtool: 'source-map',//配置生成Source Maps，选择合适的选项 eval-source-map用于生产环境
//   entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
//   output: {
//     path: __dirname + "/public/build",//打包后的文件存放的地方
//     publicPath:"/assets/",
//     filename: "bundle.js"//打包后输出文件的文件名
//   },
//   //webpack-dev-server配置
//   devServer: {
//     contentBase: "./public",//本地服务器所加载的页面所在的目录
//     //port:3000, //设置默认监听端口，如果省略，默认为”8080“
//     colors: true,//终端中输出结果为彩色
//     historyApiFallback: true,//不跳转 所有的跳转将指向index.html
//     inline: true//实时刷新
//   }
// }

/*
var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  //devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项 eval-source-map用于开发阶段环境
  devtool: 'source-map',//配置生成Source Maps，选择合适的选项 eval-source-map用于生产环境
  //入口文件
  entry: {
    app: ["./app/main.js"]
  },
  //出口文件
  output: {
    path: path.resolve(__dirname, "public"), //本地服务器所加载的页面所在的目录
    publicPath: "/assets/",   //html页面上设置的bundles.js路径 此路径不可见，只是webpack-dev-server访问的临时文件
    filename: "bundles.js"    //打包后的文件
  },
  //执行webpack-dev-server，自动刷新页面
  devServer: {
    contentBase: path.resolve(__dirname, "public"),//本地服务器所加载的页面所在的目录
    port: 3000, //设置默认监听端口，如果省略，默认为”8080“
    colors: true,//终端中输出结果为彩色
    historyApiFallback: true,//不跳转 所有的跳转将指向index.html
    inline: true//实时刷新
  },

  module: {//在配置文件里添加JSON loader
    // - test：一个匹配loaders所处理的文件的拓展名的正则表达式（必须）
    // - loader：loader的名称（必须）
    // - include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
    // - query：为loaders提供额外的设置选项（可选）
    loaders: [
      {
        test: /\.json$/,
        loader: "json"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',//在webpack的module部分的loaders里进行配置即可
        // query: {
        //   presets: ['es2015', 'react']   //query可以配置到.babelrc webpack会自动调用.babelrc里的babel配置选项
        // }
      },
      {
        test: /\.css$/,
        //loader: 'style!css'//添加对样式表的处理
        //loader: 'style!css?modules'//跟前面相比就在后面加上了?modules
        loader: 'style!css?modules!postcss' //增加!postcss处理postcss
      }
    ]
  },
  postcss: [
    require('autoprefixer')//调用autoprefixer插件
  ],
  plugins: [
    //配置打包注释
    new webpack.BannerPlugin("这里是打包文件头部注释！"),//注意这是一个数组..
    //生成html文件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./app/index.html")//new 一个这个插件的实例，并传入相关的参数
    })
  ]
}


*/

var path = require("path");
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  //入口文件
  entry: {
    app: ["./app/main.js"]
  },
  //出口文件
  // entry:  __dirname + "/app/main.js",
  output: {
    path: path.resolve(__dirname, "build"),
    // path: __dirname + "/build",
    filename: "bundle.js"
  },

  module: {
    loaders: [
      { test: /\.json$/, loader: "json" },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.css$/, loader: 'style!css?modules!postcss' }
    ]
  },
  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    new HtmlWebpackPlugin({
      //template: __dirname + "/app/index.html"//new 一个这个插件的实例，并传入相关的参数
      template: path.resolve(__dirname, "./app/index.html")
    })
  ],

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: true
  }
}