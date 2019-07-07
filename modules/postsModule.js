/**
 * modul模块涉及数据库的增删改查
 * 所以需要引入mysql创建数据库的连接
 * 
 */


// 引入mysql模块(需下载)
var mysql = require('mysql')

// 创建连接数据库
// 创建连接方法里面传一个对象
var connection = mysql.createConnection({
    host: '127.0.0.1',  //访问数据库路径(ip地址)
    user: 'root',    //数据库登录名称
    password: 'root', //数据库登录密码
    database: 'albx', //要登录数据库的表的名称
    dateStrings: true  //你要的数据库数据的格式(true:为字符串格式)
})

// 打开连接---不用写,它会默认找到最近所创建的连接来使用

// 获取所有文章的数据
/**
 * index=(pagenum-1)*pagesize
 * 
 * params:它是一个对象,里面有三个属性
 * pagenum:页码
 * pagesize:每页记录数(显示的数量)
 * query:用户搜索条件
 * query:用户搜索条件-  约定query是一个对象，里面有两个属性 query.cate:分类条件  query.statu :状态条件
 * 经过测试，发现这里不能传递一个对象，我们应该传递一个具体的变量
 * 参数对象：pagenum，pagesize，【cate,statu】
//  * 访问一个对象不存在 的属性，不会报错，只是返回undefind
 */
exports.getPostList = (params, callback) => {
    // 创建sql语句
    // limit n,m(n为索引,m为数量)
    // 数据库里面sql语句中存在严格的顺序:
    // select from [inner join .... on] where [order by ] limit
    var sql = `select posts.id,posts.title,posts.feature,                     posts.created,posts.content,posts.status,                      users.id,users.nickname,categories.name 
                from posts 
                inner join users on posts.user_id=users.id
                inner join categories on posts.category_id=categories.id
                where 1=1 `


    // 这里可以根据判断结构拼接塞选条件
    if (params.cate) {
        // 拼接分类条件
        sql += ` and posts.category_id=${params.cate}`
    }
    if (params.statu) {
        //拼接状态条件
        sql += ` and posts.status ='${params.statu}'`
    }

    sql += ` order by posts.id desc
                limit ${(params.pagenum - 1) * params.pagesize},${params.pagesize}`

    connection.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            // 这条sql语句,可以获取posts表中的总记录数
            var sql = `select count(*) cnt from posts`
            connection.query(sql, (err1, data1) => {
                if (err1) {
                    callback(err1)
                } else {
                    // 这里既要返回查询到的数据,也要返回查询到的总记录数
                    callback(null, { results: results, total: data1[0].cnt })
                }
            })

        }
    })

}


// 根据文章id删除文章数据
exports.delPostById = (id, callback) => {
    var sql = 'delete from posts where id =' + id
    connection.query(sql, (err, results) => {
        if (err) {
            callback(err)
        } else {
            callback(null) //增删改 不需要返回数据了
        }
    })
}


