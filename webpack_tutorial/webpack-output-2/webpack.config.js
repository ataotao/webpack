const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js',
        print: './src/print.js'
    },
    output: {
        filename: '[name][hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /**
     * 但是，如果我们更改了我们的一个入口起点的名称，甚至添加了一个新的名称，会发生什么？生成的包将被重命名在一个构建中，但是我们的index.html文件仍然会引用旧的名字。我们用 HtmlWebpackPlugin 来解决这个问题。
     * 在我们构建之前，你应该了解，虽然在 dist/ 文件夹我们已经有 index.html 这个文件，然而 HtmlWebpackPlugin 还是会默认生成 index.html 文件。这就是说，它会用新生成的 index.html 文件，把我们的原来的替换。
     */
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
            template: './src/index.html', //模板
            inject: true // true || 'head' || 'body' || false => 设置script放置的位置 true和'body'好像一样
        }),
        // 清理dist
        new CleanWebpackPlugin(['dist'])
    ],
};