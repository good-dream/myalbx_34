/**
 * 用来处理用户登录模块的数据处理
 * 
 */

//  引入mysql模块
var mysql = require('mysql')

// 创建连接数据库
// 创建连接方法里面传一个对象
var connection = mysql.createConnection({
    host: '127.0.0.1', //访问数据库路径(ip地址)
    user: 'root', //数据库登录名称
    password: 'root', //数据库登录密码
    database: 'albx', //要登录数据库的文件夹的名称
    dateStrings: true //设置数据库数据的格式(true:为字符串格式)
})

// 打开连接---不用写,它会默认找到最近创建的连接来使用

// 用户登录
exports.login = (email, callback) => {
    var sql = `select * from users where email='${email}'`
    connection.query(sql, (err, result) => {
        if (err) {
            callback(err)
        } else {
            console.log(result)
            callback(null, result[0])
        }
    })
}