var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname + "/build",
        // filename: "bundle.js"
        filename: "[name]-[hash:8].js"
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
            //     test: /\.css$/,
            //     loader: 'style!css?modules!postcss'
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
        require('autoprefixer')
    ],

    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/app/index.tmpl.html"
        }),
        //生产环境使用 为组件分配ID，通过这个插件webpack可以分析和优先考虑使用最多的模块，并为它们分配最小的ID
        new webpack.optimize.OccurenceOrderPlugin(),
        //生产环境使用 压缩JS代码
        new webpack.optimize.UglifyJsPlugin(),
        //分离CSS和JS文件
        // new ExtractTextPlugin("style.css")
        new ExtractTextPlugin("[name]-[hash:8].css")
    ],

}