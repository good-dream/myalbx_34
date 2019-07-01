/**
 * 拆分代码,建立MVC模型
 * 
 */

// 封装路由模块
const express = require('express')

// 引入pages表的控制器模块
const pagesController = require('../controllers/pagesController.js')


// 创建路由
// Router()构造函数创建的路由对象可以当成一个中间件来使用
const router = express.Router()


// router.get('/', (req, res) => {
//     pagesController.getIndexPage(req, res)
// })

// 当监听到Get方式的请求时,会调用函数进行处理,并且为传递两个参数:req,res
// 这两个参数是服务器传递的,不是一开始就有的

// 路由区监听判断路径(该路径是浏览器中端口号后面问号之前的路径)
// 前台页面(3个页面)
router.get('/', pagesController.getIndexPage)
    .get('/list', pagesController.getListPage)
    .get('/detail', pagesController.getDetailPage)

    // 后台管理页面,统一添加admin做为前缀
    // 判断后台全部页面的路径
    // 路径'/admin'和'/admin/index.ejs'是一样的判断路径
    .get('/admin', pagesController.getAdminPage)

    .get('/admin/categories.ejs', pagesController.getCategories)
    .get('/admin/comments.ejs', pagesController.getComments)
    .get('/admin/login.ejs', pagesController.getLogin)
    .get('/admin/nav-menus.ejs', pagesController.getNavmenus)
    .get('/admin/password-reset.ejs', pagesController.getPasswordReset)
    .get('/admin/post-add.ejs', pagesController.getPostAdd)
    .get('/admin/posts.ejs', pagesController.getPosts)
    .get('/admin/profile.ejs', pagesController.getProfile)
    .get('/admin/settings.ejs', pagesController.getSettings)
    .get('/admin/slides.ejs', pagesController.getSlides)
    .get('/admin/users.ejs', pagesController.getUsers)







// 暴露路由模块,被app.js调用
module.exports = router
