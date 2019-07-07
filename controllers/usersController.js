

//这个主要用来实现所有与users表相关的业务处理
// 思路:登录是你已经注册过了,数据库里面存在你的注册资料了


// 引入暴露的数据模块
var userModule = require('../modules/userModule')

exports.login = (req, res) => {
    var obj = req.body //下载body-parse模块,就用req.body来承载post方式的数据
    // 登陆验证应该由数据库中的数据来决定的
    // 调用数据模块中的方法,在数据库那边判断登录邮箱是否有问题,返回结果给控制器,在控制器这里判断密码是否存在问题
    // 因为在数据库那边不区分大小写字母,所以要返回控制器这里判断密码是否正确
    // obj.email为用户登录时所输入的邮箱,data为数据库查询到的邮箱,用来做判断
    userModule.login(obj.email, (err, data) => {
        if (err) {//如果出错,则返回浏览器
            // res.json方法是将里面的对象转换成字符串传回给浏览器客户端(所以里面填一个对象)
            res.json({
                code: 400,
                msg: '服务器异常'
            })
        } else {
            if (data) {//如果能查询到结果:就是说有这个邮箱
                // 判断这个邮箱的密码是否正确
                if (data.password == obj.password) {
                    res.json({
                        code: 200,
                        msg: '登录成功'
                    })
                } else {
                    res.json({
                        code: 400,
                        msg: '密码输入错误,请重新输入'
                    })
                }
            } else {
                res.json({
                    code: 400,
                    msg: '邮箱输入错误'
                })
            }
        }
    })
}
