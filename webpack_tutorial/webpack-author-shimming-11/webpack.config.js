const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    /**
     * 当模块运行在 CommonJS 环境下这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这个例子中，你可以通过使用 imports-loader 覆写 this：
     */
    module: {
        rules: [{
                test: require.resolve('./src/index.js'),
                use: 'imports-loader?this=>window'
            },
            /**
             * 现在从我们的 entry 入口文件中(即 src/index.js)，我们能 import { file, parse } from './globals.js'; ，然后一切将顺利进行。
             */
            {
                test: require.resolve('./src/globals.js'),
                use: 'exports-loader?file,parse=helpers.parse'
            }
        ]
    },
    /**
     * 使用 ProvidePlugin 后，能够在通过 webpack 编译的每个模块中，通过访问一个变量来获取到 package 包。
     * 如果 webpack 知道这个变量在某个模块中被使用了，那么 webpack 将在最终 bundle 中引入我们给定的 package。让我们先移除 lodash 的 import 语句，并通过插件提供它：
     */
    plugins: [
        // _: 'lodash'
        /**
         * 我们还可以使用 ProvidePlugin 暴露某个模块中单个导出值，只需通过一个“数组路径”进行配置（例如 [module, child, ...children?]）。所以，让我们做如下设想，无论 join 方法在何处调用，我们都只会得到的是 lodash 中提供的 join 方法。
         */
        new webpack.ProvidePlugin({
            join: ['lodash', 'join']
        })
    ]
};

/**
 * 本质上，我们所做的，就是告诉 webpack……
 * 如果你遇到了至少一处用到 _ 变量的模块实例，那请你将 lodash package 包引入进来，并将其提供给需要用到它的模块。
 */