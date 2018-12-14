const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // mode: "development" // development mode 未import的函数会保留， bundle也不是完全压缩过的(minified)：
    //mode: "production" // 将使用 -p(production) 这个 webpack 编译标记，来启用 UglifyJSPlugin 插件。 也可以在命令行接口中使用 --optimize-minimize 标记，来启用 UglifyJSPlugin。
};