
// 定义一个对象,里面包含封装好的方法(获取路由名称的方法)
var itcast = {
    // 获取当前href中的路由名称
    getRouterName: (href) => {//传进来一个(href:形参)地址的字符串
        // 有问号(?)就可判断是否有参数的标识
        var index = href.indexOf('?')  //返回一个索引值给index
        // 定义一个变量来存储路由名称
        var routername = ""
        // 判断是否有参数
        if (index == -1) {//没有参数
            // href.lastIndexOf('/')方法返回一个索引值
            // href.substring()方法为截取该字符串/后的内容,加1是为了不包含斜杠(/)
            routername = href.substring(href.lastIndexOf('/') + 1)
        } else {
            // href.substring()方法,有两个参数时,第一个参数时从该索引值开始截取,第二个参数表示截取到该索引值为止(不包含该索引)
            routername = href.substring(href.lastIndexOf('/') + 1, href.indexOf('?'))
        }
        return routername  //返回的就是获取到的路由
    }
}