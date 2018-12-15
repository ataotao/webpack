// function getComponent() {

//     return import( /* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//         var element = document.createElement('div');
//         var _ = _.default;

//         element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//         return element;

//     }).catch(error => 'An error occurred while loading the component');
// }
// getComponent().then(component => {
//     document.body.appendChild(component);
// })

/**
 * 由于 import() 会返回一个 promise，因此它可以和 async 函数一起使用。但是，需要使用像 Babel 这样的预处理器和Syntax Dynamic Import Babel Plugin。
 * 下面是如何通过 async 函数简化代码：
 */

async function getComponent() {
    var element = document.createElement('div');
    // 我们不再使用静态导入 lodash，而是通过使用动态导入来分离一个 chunk：
    /**
     * 注意，在注释中使用了 webpackChunkName。
     * 这样做会导致我们的 bundle 被命名为 lodash.bundle.js ，而不是 [id].bundle.js 。想了解更多关于 webpackChunkName 和其他可用选项，请查看 import() 相关文档。让我们执行 webpack，查看 lodash 是否会分离到一个单独的 bundle：
     */
    const _ = await import( /* webpackChunkName: "lodash" */ 'lodash');
    const qs = await import( /* webpackChunkName: "qs" */ /* webpackPrefetch: true */ 'qs');
    console.log(qs);
    /* webpackPrefetch: true */
    /* 暂时未翻译 */
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}



getComponent().then(component => {
    document.body.appendChild(component);
});

