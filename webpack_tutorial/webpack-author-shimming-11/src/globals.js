/**
 * 全局 exports 
 * 让我们假设，某个库(library)创建出一个全局变量，它期望用户使用这个变量。为此，我们可以在项目配置中，添加一个小模块来演示说明：
 */
var file = 'blah.txt';
var helpers = {
    test: function () {
        console.log('test something');
    },
    parse: function () {
        console.log('parse something');
    }
};

/**
 * 你可能从来没有在自己的源码中做过这些事情，但是你也许遇到过一个老旧的库(library)，和上面所展示的代码类似。在这个用例中，我们可以使用 exports-loader，将一个全局变量作为一个普通的模块来导出。例如，为了将 file 导出为 file 以及将 helpers.parse 导出为 parse，做如下调整：
 */