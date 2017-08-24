import React, { Component } from 'react';
import './style/style.css';

export default class Hello extends Component {
    render() {
        return (
            <div className="home">
                <p className="title">欢迎使用 Qreact</p>
                <p>你可以将 ykit.js 中 webpack 配置里的 alias 字段注释掉并执行 ykit pack -m 以对比 React 和 QReact 打包体积大小的区别。</p>
                <h3>在低版本 IE 下使用需要注意以下几个问题</h3>
                <ul className="list">
                    <li>ykit.js 中的 alias 字段配置需要指向 qreact/dist/ReactIE 而不是 qreact。</li>
                    <li>.babelrc 中需要在 plugins 中添加 add-module-exports，更多信息请直接查看 .babelrc 文件。</li>
                    <li>入口文件不能使用 import 方式引入包或者组件，且需要引入 es5-shim 和 es5-sham，更多信息请直接查看 src/App.js 文件。</li>
                </ul>
                <p>更多详细信息，请<a href="http://qreact.ymfe.org">查看文档</a>。</p>
            </div>
        );
    }
}