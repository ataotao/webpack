/**
 * 通过使用 output.filename 进行文件名替换，可以确保浏览器获取到修改后的文件。[hash] 替换可以用于在文件名中包含一个构建相关(build-specific)的 hash，但是更好的方式是使用 [chunkhash] 替换，在文件名中包含一个 chunk 相关(chunk-specific)的哈希。
让我们使用起步 中的示例，以及管理输出 中的 plugins 来作为项目的基础，所以我们不必手动处理维护 index.html 文件：
 */
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[chunkhash].js',
        // filename: '[name].[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    /**
     * 提取模板(Extracting Boilerplate) 
     * 正如我们在 [代码分离]code splitting 中所学到的，SplitChunksPlugin 可以用于将模块分离到单独的文件中。 
     * webpack 提供了一个优化功能，可以根据提供的选项将运行时代码拆分成单独的块，直接将 optimization.runtimeChunk 设置为 single，就能创建单个运行时 bundle(one runtime bundle)：
     */
    // optimization: {
    //     runtimeChunk: 'single'
    // }
    /**
     * 将第三方库(library)（例如 lodash 或 react）提取到单独的 vendor chunk 文件中，是比较推荐的做法，这是因为，它们很少像本地的源代码那样频繁修改。因此通过实现以上步骤，利用客户端的长效缓存机制，可以通过命中缓存来消除请求，并减少向服务器获取资源，同时还能保证客户端代码和服务器端代码版本一致。 这可以通过使用 SplitChunksPlugin 示例 2 中演示的 SplitChunksPlugin 插件的 cacheGroups 选项来实现。我们在 optimization.splitChunks 添加如下 cacheGroups 参数并构建：
     */
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Caching'
        }),
        /**
         * ……我们可以看到这三个文件的 hash 都变化了。这是因为每个 module.id 会基于默认的解析顺序(resolve order)进行增量。也就是说，当解析顺序发生变化，ID 也会随之改变。因此，简要概括：
         * main bundle 会随着自身的新增内容的修改，而发生变化。
         * vendor bundle 会随着自身的 module.id 的修改，而发生变化。
         * manifest bundle 会因为当前包含一个新模块的引用，而发生变化。
         * 第一个和最后一个都是符合预期的行为
         * 
         *  -- 而 vendor 的 hash 发生变化是我们要修复的。幸运的是，可以使用两个插件来解决这个问题。
         * 第一个插件是 NamedModulesPlugin，将使用模块的路径，而不是数字标识符。虽然此插件有助于在开发过程中输出结果的可读性，然而执行时间会长一些。
         * 第二个选择是使用 HashedModuleIdsPlugin，推荐用于生产环境构建：
         */
        new webpack.HashedModuleIdsPlugin()
    ],
}
