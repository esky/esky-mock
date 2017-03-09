# 假数据服务

+ 数据生成库：http://mockjs.com/

## 数据规则

简单示例：

~~~js
// 使用mockjs语法，每次请求时变化
{
	'ui/grid/load': {
		'retcode': 200,
		'data': {
			'result|100': [{
				'id|+1': 1,
				account: '@email',
				name: '@cname'
			}],
			'totalCount|500-1000': 1
		}
	}
}
~~~

完整格式：

~~~js
// 每次请求的内容不同
{
	'ui/grid/load': {
		// 请求延迟毫秒数
		delay: 300,
		// 是否使用mockjs库解析
		useMockjs: true,
		// 响应内容对象/函数
		response: {
			'retcode': 200,
			'data': {
				'result|100': [{
					'id|+1': 1,
					account: '@email',
					name: '@cname'
				}],
				'totalCount|500-1000': 1
			}
		)
	}
}
~~~

高级示例：

~~~js
// response若为函数，则每次请求均会执行。
// 需要对请求编程时可使用，可以自己处理响应
{
	// req请求对象，res响应对象
	// 文档：http://www.expressjs.com.cn/4x/api.html
	response: function(req, res){
		// 私有代码
	}
}
~~~