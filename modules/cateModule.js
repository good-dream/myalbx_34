

/**
 * 所有与分类相关的操作都在这文件中完成
 */

// 1.引入mysql
const mysql = require('mysql')
// 2.创建连接
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'albx',
    dateString: true
})

// 获取所有分类数据
exports.getAllCateList = (callback) => {
    var sql = 'select * from categories'
    connection.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            callback(null, results)
        }
    })
}