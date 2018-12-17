使用第三方库 
======

    当从 npm 安装第三方库时，一定要牢记同时安装这个库的类型声明文件。你可以从 TypeSearch[http://microsoft.github.io/TypeSearch/] 中找到并安装这些第三方库的类型声明文件。

    举个例子，如果想安装 lodash 这个库的类型声明文件，我们可以运行下面的命令：

    npm install --save-dev @types/lodash
    使用
    import * as _ from "lodash";
    想了解更多，可以查看这篇文章。


导入其他资源 
======

    要在 TypeScript 里使用非代码资源，我们需要告诉 TypeScript 如何兼容这些导入类型。那么首先，我们需要在项目里创建 custom.d.ts 文件，这个文件用来编写自定义的类型声明。让我们将 .svg 文件进行声明设置：

    custom.d.ts

    declare module "*.svg" {
        const content: any;
        export default content;
    }
    这里，我们通过指定任何以 .svg 结尾的导入，并将模块的 content 定义为 any，将 SVG 声明一个新的模块。我们可以通过将类型定义为字符串，来更加显式地将它声明为一个 url。同样的理念适用于其他资源，包括 CSS, SCSS, JSON 等。