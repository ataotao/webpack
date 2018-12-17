/**
 * 使用第三方库 
 * 当从 npm 安装第三方库时，一定要牢记同时安装这个库的类型声明文件。你可以从 TypeSearch 中找到并安装这些第三方库的类型声明文件。
 * 举个例子，如果想安装 lodash 这个库的类型声明文件，我们可以运行下面的命令：
 * npm install --save-dev @types/lodash
 * import * as _ from "lodash";
 */

import * as _ from "lodash";
import printMe from './print';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console!!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());