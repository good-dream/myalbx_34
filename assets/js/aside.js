
// 封装成一个函数,实现左侧导航块的合理展开(纯页面操作)
$(function () {

    // 思路:1.查看html结构,发现我们只需要对ul结构进行设置
    //  1.1在class中添加int样式
    //  1.2将aria-expanded='true'

    // 考虑: 在ul中, 在不注册单击事件的情况, 要怎么知道用户单击的是哪个子菜单
    // 2.1获取当前单击后url中的最后一个 斜杠(/) 后面部分(就是路由部分)
    // 2.2还要考虑路由后面是否拼接参数

    // 获取url路由名称
    // location.href(整个路径:http://127.0.0.1:3000/index.html?id=1&userName=tom)
    // 获取location.href中的最后一个/后面的内容
    var routername = itcast.getRouterName(location.href)

    // 获取你想操作的dom元素
    // 查找posts里面的ul元素
    var menu_posts = $('#menu-settings')
    // 判断路由名称(因为ul下面有三个子菜单)
    // 如果是post-add|posts |categories, 就要为ul来设置添加对应的样式和设置属性
    if (routername == 'post-add' || routername == 'posts' || routername == 'categories') {
        // 如果路由为这三个子菜单的,则给ul添加个类(in),然后给ul元素设置一个属性和属性值
        menu_posts.addClass('in');
        menu_posts.attr('aria-expanded', true)
    }

    // 设置菜单也需要这个处理
    // 查找settings里面的ul
    var menu_settings = $('#menu-settings')
    // 判断路由名称(该ul下也有三个子菜单)
    if (routername == 'nav-menus' || routername == 'slides' || routername == 'settings') {
        menu_posts.addClass('in');
        menu_posts.attr('aria-expanded', true)
    }

    // 让左侧栏字体高亮,添加active样式:排它法
    $('li').removeClass('active');
    // 获取当前被单击的元素:我得知道你当前你点击了哪项菜单项
    // 所以我们为元素添加标识(在aside.ejs中添加id),而且这个标识需要和路由名称相关
    $('#' + routername).addClass('active')
})




// $(function() {}) 是$(document).ready(function()的简写。