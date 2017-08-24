# QReact IE 8 示例

## 使用

```javascript
npm install
npm run dev
```

## 注意

在 IE 8 及以下版本浏览器中使用需要注意以下几个问题：

- `ykit.js` 中的 `alias` 字段配置需要指向 `qreact/dist/ReactIE` 而不是 `qreact`。

- `.babelrc` 中需要在 `plugins` 中添加 `add-module-exports`。

```javascript
{
    "plugins": [
        "transform-export-extensions",
        // babel@6 不再以 commonJS 方式输出模块
        // 而在入口文件中中必须以 require 方式引入模块
        // 否则无法正常渲染
        // 详细信息请查看 https://github.com/59naga/babel-plugin-add-module-exports
        "add-module-exports"
    ],
    "presets": [
        "es2015",
        "react"
    ]
}
```
- 入口文件不能使用 `import` 方式引入包或者组件，且需要引入 `es5-shim` 和 `es5-sham`。

```javascript
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
```
