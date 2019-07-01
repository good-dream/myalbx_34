/**
 * 该路由区js文件用来渲染静态页面的(返回页面给浏览器)
 * 
 */

// 引入express框架
// const express = require('express')
// 引入fs模块
const fs = require('fs')

// 读取前台页面
// module.exports.getIndexPage=function(req,res){
//     res.render('index.ejs')
// }
module.exports.getIndexPage = (req, res) => {
    res.render('index.ejs')   //render()方法里面的第二个参数可以不写
}
module.exports.getListPage = (req, res) => {
    res.render('list.ejs')
}
module.exports.getDetailPage = (req, res) => {
    res.render('detail.ejs')
}

// 读取后台页面
module.exports.getAdminPage = (req, res) => {
    res.render('admin/index.ejs')
}
module.exports.getCategories = (req, res) => {
    res.render('admin/categories.ejs')
}
module.exports.getComments = (req, res) => {
    res.render('admin/comments.ejs')
}
module.exports.getLogin = (req, res) => {
    res.render('admin/login.ejs')
}
module.exports.getNavmenus = (req, res) => {
    res.render('admin/nav-menus.ejs')
}
module.exports.getPasswordReset = (req, res) => {
    res.render('admin/password-reset.ejs')
}
module.exports.getPostAdd = (req, res) => {
    res.render('admin/post-add.ejs')
}
module.exports.getPosts = (req, res) => {
    res.render('admin/posts.ejs')
}
module.exports.getProfile = (req, res) => {
    res.render('admin/profile.ejs')
}
module.exports.getSettings = (req, res) => {
    res.render('admin/settings.ejs')
}
module.exports.getSlides = (req, res) => {
    res.render('admin/slides.ejs')
}
module.exports.getUsers = (req, res) => {
    res.render('admin/users.ejs')
}




