import React from 'react'
import ReactDOM from 'react-dom/client'
//正确的样式引入顺序
//初始化样式(reset-css)一般放在最前
//UI框架的样式次之
//然后是全局样式
//最后是自己的样式

//import './....' 是全局引入
import 'reset-css'
import '@/assets/style/global.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import Router from '@/router/index'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App></App>
  </BrowserRouter>
)
