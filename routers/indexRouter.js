/**
 * 拆分代码,建立MVC模型
 * 
 */

// 封装路由模块
const express = require('express')

// 引入pages表的控制器模块
const pagesController = require('../controllers/pagesController.js')
const postsController = require('../controllers/postsController.js')
const cateController = require('../controllers/cateController.js')
const usersController = require('../controllers/usersController')
const uploadController = require('../controllers/uploadController')


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
    // 路径'/admin'和'/admin/index'是一样的判断路径
    .get('/admin', pagesController.getAdminPage)

    .get('/admin/categories', pagesController.getCategoriesPage)
    .get('/admin/comments', pagesController.getCommentsPage)
    .get('/admin/login', pagesController.getLoginPage)
    .get('/admin/nav-menus', pagesController.getNavmenusPage)
    .get('/admin/password-reset', pagesController.getPasswordResetPage)
    .get('/admin/post-add', pagesController.getPostAddPage)
    .get('/admin/posts', pagesController.getPostsPage)
    .get('/admin/profile', pagesController.getProfilePage)
    .get('/admin/settings', pagesController.getSettingsPage)
    .get('/admin/slides', pagesController.getSlidesPage)
    .get('/admin/users', pagesController.getUsersPage)


    // 业务处理
    // 需求:所有文章的数据动态展示
    // 获取所有文章数据
    .get('/getPostList', postsController.getPostList)
    // 删除所选文章
    .get('/delPostById', postsController.delPostById)
    .get('/addPost', postsController.addPost)



    // 获取所有分类数据
    .get('/getAllCateList', cateController.getAllCateList)

    //给文件上传添加路由
    .post('/uploadFile', uploadController.uploadFile)

    //用户登陆
    .post('/login', usersController.login)


// 暴露路由模块,被app.js调用
module.exports = router
