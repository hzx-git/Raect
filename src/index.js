import React from 'react';
import ReactDOM from 'react-dom';
import TaoBao from './components/TaoBao/TaoBao';


import './assets/css/base.css';//程序主入口 引入样式，默认会暴露到全局  style-loader 插入到style标签
ReactDOM.render(
    <TaoBao/>,
    document.getElementById('root')
);

