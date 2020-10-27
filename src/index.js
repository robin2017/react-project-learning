import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router';
import './index.scss'
//引入fusion的全局样式（会改变Link组件样式）
import '@alifd/next/dist/next.css';

ReactDOM.render( < Route/> ,
  document.getElementById('root')
);

