/**
 * 通过使用 SplitChunks 插件来移除重复的模块
 */
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js',
        another: './src/another-module.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /**
     * 这里我们使用 SplitChunks 之后，现在应该可以看出，index.bundle.js 中已经移除了重复的依赖模块。需要注意的是，CommonsChunkPlugin 插件将 lodash 分离到单独的 chunk，并且将其从 main bundle 中移除，减轻了大小。执行 npm run build 查看效果：
     */
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};