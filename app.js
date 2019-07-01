/**
 * 后端入口文件
 *
 */

// 思路:1.下载express框架
//      2.引入express框架,创建express服务器
//      3.添加服务器端口监听
//      4.添加路由配置,引入路由模块
//      5.添加静态资源的托管


// 引入express框架
const express = require('express')

// 引入ejs模块(要渲染)
const ejs = require('ejs')

// 引入路由模块(路由器js文件中暴露出来的,方便下面)
const router = require('./routers/index.js')
// 创建express服务器
const app = express()

// 添加服务器端口监听
app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})

// 设置模板引擎为ejs
app.set('view engine', 'ejs')
// 指定模板文件的目录,后期使用ejs的时候就可以参照这个目录进行ejs文件查询
app.set("views", 'views')


// 添加路由配置,引入路由模块
// use:让app应用来使用这个路由进行所有的用户请求的路由管理
app.use(router)




