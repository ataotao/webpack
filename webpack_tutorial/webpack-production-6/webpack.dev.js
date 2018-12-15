const merge = require('webpack-merge');
const common = require('./webpack.common.js');
/**
 * 在 webpack.dev.js 中，我们将 mode 设置为 development，并且为此环境添加了推荐的 devtool（强大的 source map）和简单的 devServer 配置。
 */
module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    }
});