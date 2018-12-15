

function component() {
  var element = document.createElement('div');
  // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  /**
   * 我们还可以使用 ProvidePlugin 暴露某个模块中单个导出值，只需通过一个“数组路径”进行配置（例如 [module, child, ...children?]）。所以，让我们做如下设想，无论 join 方法在何处调用，我们都只会得到的是 lodash 中提供的 join 方法。
   */
  element.innerHTML = join(['Hello', 'webpack', '!!!'], ' ');

  // 一些传统的模块依赖的 this 指向的是 window 对象。
  /**
   * 当模块运行在 CommonJS 环境下这将会变成一个问题，也就是说此时的 this 指向的是 module.exports。在这个例子中，你可以通过使用 imports-loader 覆写 this：
   */
  this.alert('Hmmm, this probably isn\'t a great idea...')
  
  return element;
}

document.body.appendChild(component());