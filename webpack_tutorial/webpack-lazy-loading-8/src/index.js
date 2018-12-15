 import _ from 'lodash';

 function component() {
     var element = document.createElement('div');
     var button = document.createElement('button');
     var br = document.createElement('br');

     button.innerHTML = 'Click me and look at the console!';
     element.innerHTML = _.join(['Hello', 'webpack'], ' ');
     element.appendChild(br);
     element.appendChild(button);

     // Note that because a network request is involved, some indication
     // of loading would need to be shown in a production-level site/app.
     button.onclick = e => import( /* webpackChunkName: "print" */ './print').then(module => {
         // 注意当调用 ES6 模块的 import() 方法（引入模块）时，必须指向模块的 .default 值，因为它才是 promise 被处理后返回的实际的 module 对象。
         // console.log(module);
         var print = module.default;
         print();
     });

     return element;
 }

 document.body.appendChild(component());

 /**
  * 框架 
  * 许多框架和类库对于如何用它们自己的方式来实现（懒加载）都有自己的建议。这里有一些例子：
  * 
  * React: Code Splitting and Lazy Loading [https://reacttraining.com/react-router/web/guides/code-splitting]
  * Vue: Lazy Load in Vue using Webpack's code splitting [https://alexjoverm.github.io/2017/07/16/Lazy-load-in-Vue-using-Webpack-s-code-splitting/]
  * AngularJS: AngularJS + Webpack = lazyLoad by @var_bincom [https://medium.com/@var_bin/angularjs-webpack-lazyload-bb7977f390dd]
  */