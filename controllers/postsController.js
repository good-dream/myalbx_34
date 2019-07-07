/**
 * 该控制器用来控制获取所有文章列表的数据
 * 
 */
// 引入module模块暴露出来的
var postsModule = require('../modules/postsModule.js')
// 引入第三方模块moment(获取日期时间)
var moment = require('moment')

exports.getPostList = (req, res) => {
    // 获取参数对象(该接收方法为body-parser模块里面具有的)
    var obj = req.query
    // 获取所有文章列表的返回
    // 数据获取调用数据模块进行处理
    postsModule.getPostList(obj, (err, data) => {
        if (err) {
            res.json({
                code: 400,
                msg: "数据查询失败"
            })
        } else {
            // 将日期格式进行合理的转换
            // for(var i=0;i<data.length;i++){
            //     //moment()中的参数就是你想转换的日期值,如果没有写就会默认的获取当前日期值进行转换
            //     data[i].created=moment(data[i].created).format('YYYY-MM-DD HH:mm:ss')
            // }
            res.json({
                code: 200,
                msg: "数据查询成功",
                data: data
            })
        }
    })
}

// 根据文章id删除文章数据
exports.delPostById = (req, res) => {
    var id = req.query.id
    // 调用数据模块中的方法
    postsModule.delPostById(id, (err) => {
        if (err) {
            res.json({
                code: 400,
                msg: '数据删除失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '数据删除成功'
            })
        }
    })
}

exports.addPost = (req, res) => {
    // 接收参数
    var obj = req.body
    obj.views = 0
    obj.likes = 0
    obj.user_id = '?'
    console.log(obj)
    // 调用数据模块的新增文章的方法进行文章的新增
}

