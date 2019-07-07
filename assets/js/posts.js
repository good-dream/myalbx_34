
$(function () {
    // 当期页码
    var pagenum = 1;
    // 每页显示的记录数
    var pagesize = 2;

    // 发起ajax请求,请求所有文章的数据
    init({});


    // 数据初始化
    function init() {
        // 发起ajax请求,请求所有文章数据
        $.ajax({
            type: 'get',
            url: '/getPostList',
            data: {
                pagenum: pagenum,
                pagesize: pagesize,
                // 展开运算符:可以将对象的具体属性进行展开,展开为一组一组的键值对
                ...query
            },
            dataType: 'json',
            success: function (res) {
                // 生成文章数据结构
                // 调用template方法渲染, 添加到tbody里面(html架构中)
                var htmlStr = template('postListTemp', res)
                $('tbody').html(html)

                // 生成分页结构(具体多少页,通过公式向上取整)
                setPage(Math.ceil(res.data.total / pagesize))
            }
        })
    }


    // 使用一个自调用函数来实现分类数据的加载
    (function () {
        $.ajax({
            url: '/getAllCateList',
            type: 'get',
            success: function (res) {
                // 生成分类数据的动态结构
                // 因为要渲染的数据不多,所以直接用字符串拼接的方式
                var html = '<option value="all">所有分类</option>'
                for (var i = 0; i < res.data; i++) {
                    html += `<option value="${res.data[i].id}">${res.data[i].name}</option>`
                }
                $('.cateSelector').html(html)
            }
        })
    })()


    // 实现分页功能
    // 运用分页插件(bootstrapPaginator)方法来实现分页功能,第三方要下载
    function setPage(count) {
        $(".pagination").bootstrapPaginator({
            // 设置版本号
            bootstrapMajorVersion: 3,
            currentPage: pagenum,
            totalPages: count,
            onPageClicked: function (event, originalEvent, type, page) {
                console.log(page)
                // 我们发现,这个page就是当前的合理页码值,我们只需要将全局的pagenum重置,并且重新获取数据就可以了
                pagenum = page
                // 重新获取数据(调用封装好的方法重新加载数据)
                init()
            }
        })
    }

    // 实现用户数据的赛选
    // 给button标签添加了一个点击事件
    $('.btn-search').on('click', function (event) {
        // 因为button标签有默认行为
        event.preventDefault()

        // 重点是获取用户数据(就是说客户选择了哪些条件做塞选条件),你也可以用全局变量
        var query = {}
        // 判断用户有没有选择指定的塞选条件
        if ($('.cateSelector').val() != 'all') {
            query.cate = $('.cateSelector').val()
        }
        if ($('.statuSelector').val() != 'all') {
            query.statu = $('.statuSelector').val()
        }
        // 发起请求
        init(query)
    })


    // 使用事件委托的方式来实现文章数据的删除

    $('tbody').on('click', '.btndel', function () {
        // 添加删除确认对话框
        // confirm返回一个布尔值(boolean),如果用户单击确定,就是true,否则就是false
        if (window.confirm('请问你是否真的需要删除?')) {
            var id = $(this).data('id')
            $.ajax({
                type: 'get',
                url: '/delPostById',
                data: { id: id },
                success: (res) => {
                    // location.href = location.href
                    init(res)
                }
            })
        }
        // 获取id,根据id来删除响应的

    })


})