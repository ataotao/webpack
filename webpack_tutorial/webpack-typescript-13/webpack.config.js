const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    // 这会直接将 webpack 的入口起点指定为 ./index.ts，
    entry: './src/index.ts',
    /**
     * 要启用 source map，我们必须配置 TypeScript，以将内联的 source map 输出到编译过的 JavaScript 文件。必须在 TypeScript 配置中添加下面这行 "sourceMap": true,
     * 现在，我们需要告诉 webpack 提取这些 source map，并内联到最终的 bundle 中。
     */
    devtool: 'inline-source-map',
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    },
    // 然后通过 ts-loader _加载所有的 .ts 和 .tsx 文件，
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    // 并且在当前目录输出_一个 bundle.js 文件。
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html',
            inject: true
        }),
        // 清理dist
        new CleanWebpackPlugin(['dist'])
    ],
};