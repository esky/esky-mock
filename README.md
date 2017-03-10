# 假数据服务

## 安装

> npm install esky-mock -g


## 配置

> 具体用法可参考 test目录

~~~js
// 举例：项目根目录/mock/  存放假数据相关文件
// 配置文件 mock/conf.js
module.exports =  {
	// 请求默认的延迟时间
	delay: 300,
	// 基础路径，假数据的URL则省略该路径不写
	base: 'api',
	// 服务端口，配合webpack的代理使用
	port: 3334,
	// 【必须】假数据文件目录相对路径(相对于node命令的执行路径)
	dataDir: 'mock/data'
}
// 假数据目录 mock/data
~~~

## 使用
~~~js
// 全局安装，命令行使用
$ esky-mock -c mock/conf.js
~~~

~~~js
// npm项目中使用
$ npm install esky-mock
// npm scripts
$ npm run mock
// package.json
{
	"scripts": {
		"mock": "esky-mock -c mock/conf.js",
	}
}
~~~

## webpack的代理使用

~~~js
// 本地服务
config.devServer = {
	port: 3333,
	historyApiFallback: true,
	hot: true,
	inline: true,
	proxy: {
		'/api/*': {
			target: 'http://127.0.0.1:3334',
 			secure: false
		}
	}
}
~~~

## 数据规则

> mock规则文档：http://mockjs.com/

简单示例：

~~~js
// 使用mockjs语法，每次请求时变化
{
	'ui/grid/load': {
		'code': 200,
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
			'code': 200,
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

## JSON接口

[推荐接口标准](https://github.com/esky/esky-mock/blob/master/JSON.md)