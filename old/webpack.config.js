var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
    entry: __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        //path: __dirname + "/public",//打包后的文件存放的地方
        //filename: "bundle.js"//打包后输出文件的文件名
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            //在配置文件里添加JSON loader
            {
                test: /\.json$/,
                loader: "json"
            },
            //在配置文件里添加babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,  //排除node_modules文件夹
                loader: 'babel',//在webpack的module部分的loaders里进行配置即可
                //可以配置到.babellrc文件，webpack会自动调用.babelrc里的babel配置选项
                // query: {
                //     presets: ['es2015', 'react']
                // }
            },
            /**
             * 在配置文件里添加css-loader 和 style-loader
             * css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能
             * style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中。
             */
            // {
            //     test: /\.css$/,
            //     //loader: 'style!css'//添加对样式表的处理
            //     //loader: 'style!css?modules' //跟前面相比就在后面加上了?modules
            //     loader: 'style!css?modules!postcss'  //跟前面相比就在后面加上了?postcss，配合下面autoprefixer插件调用，给样式自动添加前缀
            // },
            /**
             * ExtractTextPlugin插件分离css文件
             */
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style', 'css?modules!postcss')
            }
        ]
    },
    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],
    plugins: [
        //配置打包注释
        new webpack.BannerPlugin("Copyright Ataotao！"),//注意这是一个数组..
        //这个插件的作用是依据一个简单的模板，帮你生成最终的Html5文件，这个文件中自动引用了你打包后的JS文件。每次编译都在文件名中插入一个不同的哈希值。
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        }),
        new webpack.HotModuleReplacementPlugin(),//热加载插件
        //生产环境使用 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurenceOrderPlugin(),
        //生产环境使用 压缩JS代码
        new webpack.optimize.UglifyJsPlugin(),
        //分离CSS和JS文件
        new ExtractTextPlugin("style.css")
    ],
    devServer: {
        //contentBase: "./build",//本地服务器所加载的页面所在的目录
        hot: true, //配合热加载插件
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true,//实时刷新
        port: 3000
    }
}
