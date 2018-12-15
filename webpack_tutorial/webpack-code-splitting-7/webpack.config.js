/**
 * 在我们开始本节之前，先从配置中移除掉多余的 entry 和 optimization.splitChunks，因为接下来的演示中并不需要它们：
 */
const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: '[name].bundle.js',
        /**
         * 注意，这里使用了 chunkFilename，它决定非入口 chunk 的名称。想了解 chunkFilename 更多信息，请查看 output 相关文档。接着，更新我们的项目，移除掉那些现在不会用到的文件:
         * output 相关文档 https://webpack.docschina.org/configuration/output/#output-chunkfilename
         */
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },

};