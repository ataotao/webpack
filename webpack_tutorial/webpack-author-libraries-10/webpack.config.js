var path = require('path');

module.exports = {
    /**
     * 注意，library 设置绑定到 entry 配置。对于大多数库，指定一个入口起点就足够了。虽然构建多个库也是也可以的，然而还可以直接通过将主入口脚本(index script)暴露部分导出，来作为单个入口起点则相对简单。不推荐使用数组作为库的 entry。
     */
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        /**
         * 当你在 import 引入模块时，这可以将你的 library bundle 暴露为名为 webpackNumbers 的全局变量。
         * 为了让 library 和其他环境兼容，还需要在配置文件中添加 libraryTarget 属性。这是可以控制 library 如何以不同方式暴露的选项。
         */
        library: 'webpackNumbers',
        /**
         * 可以通过以下方式暴露 library：
         * 遍历：作为一个全局变量，通过 script 标签来访问（libraryTarget:'var'）。
         * this：通过 this 对象访问（libraryTarget:'this'）。
         * window：通过 window 对象访问，在浏览器中（libraryTarget:'window'）。
         * UMD：在 AMD 或 CommonJS 的 require 之后可访问（libraryTarget:'umd'）。
         * 如果设置了 library 但没设置 libraryTarget，则 libraryTarget 默认为 var，详细说明请查看 output 配置文档。查看 output.libraryTarget，以获取所有可用选项的详细列表。
         */
        libraryTarget: 'umd'
    },
    /**
     * 外部化 lodash 
     * 现在，如果执行 webpack，你会发现创建了一个非常巨大的文件。如果你查看这个文件，会看到 lodash 也被打包到代码中。
     * 在这种场景中，我们更倾向于把 lodash 当作 peerDependency。也就是说，用户应该已经将 lodash 安装好。
     * 因此，你可以放弃对外部 library 的控制，而是将控制权让给使用 library 的用户。
     * 这可以使用 externals 配置来完成：
     */
    externals: {
        lodash: {
            commonjs: 'lodash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
};