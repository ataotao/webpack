 现在，让我们以某种方式打包这个 library，能够实现以下几个目标：
=======

- 不打包 lodash，而是使用 externals 来 require 用户加载好的 lodash。
- 设置 library 的名称为 webpack-numbers.
- 将 library 暴露为一个名为 webpackNumbers的变量。
- 能够访问其他 Node.js 中的 library。
- 此外，用户应该能够通过以下方式访问 library：

    - ES2015 模块。例如 import webpackNumbers from 'webpack-numbers'。
    - CommonJS 模块。例如 require('webpack-numbers').
    - 全局变量，当通过 script 脚本引入时


遵循生产环境指南中的步骤，来优化生产环境下的输出。那么，我们还需要通过设置 package.json 中的 main 字段，添加生成 bundle 的文件路径。

```
{
  ...
  "main": "dist/webpack-numbers.js",
  ...
}
```
或者，按照这里的指南添加为标准模块：
```
{
  ...
  "module": "src/index.js",
  ...
}
```