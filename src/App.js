// 引入 shim 解决 IE 8 下 Object.defineProperty 的问题
require('es5-shim');
require('es5-shim/es5-sham');

// 入口文件处不可用 import 引入模块，其他页面不受影响
// 因为 babel 把 import 编译成了 Object.defineProperty
// 而 IE8 中没有这个方法，上方引入的 shim 解决了这个问题
const React = require('react');
const ReactDOM = require('react-dom');
const Hello = require('./component/Hello');

ReactDOM.render(
    <Hello/>,
    document.getElementById('app')
);