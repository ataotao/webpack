/**
 * 如果你使用了 webpack-dev-middleware 而没有使用 webpack-dev-server，请使用 webpack-hot-middleware package 包，以在你的自定义服务或应用程序上启用 HMR。
 * 你可以通过命令来修改 webpack-dev-server 的配置：webpack-dev-server --hotOnly。
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    //  如果使用dev-server.js,则不在此设置
    //   devServer: {
    //     contentBase: './dist',
    //      hot: true
    //   },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Hot Module Replacement'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    //   HMR 修改样式表
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
};

/**
 * 其他代码和框架 
 * 社区还有许多其他 loader 和示例，可以使 HMR 与各种框架和库(library)平滑地进行交互……
 * 
 * React Hot Loader：实时调整 react 组件。
 * Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。
 * Elm Hot Loader：支持用于 Elm 程序语言的 HMR。
 * Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。
 * Angular HMR：No loader necessary! A simple change to your main NgModule file is all that's required to have full control over the HMR APIs.没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。
 */