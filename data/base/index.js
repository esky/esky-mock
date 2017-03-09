'use strict';
let menus = require('./menu')
let dict = require('./dict')
module.exports = {
	'com/init': {
		delay: 300,
		response: function(req, res){
			// 动态数据
			return {
				// 'retcode': 5002,
				'retcode': 200,
				data: {
					// 本地测试开关
					// __NSIP_DEBUG: true,
					user:{
						memberId: '@id',
						userId: '@id',
						userName: '@cname',
						system: 1
					},
					dict: dict,
					menus: menus,
					serverTime: Date.now()
				},
				retdesc: '服务器撒娇了'
			}
		}
	},
	'com/login': {
		retcode: 200
	},
	'com/logout': {
		retcode: 200,
		retdesc: '系统故障'
	},
	'com/systemtime': {
		response: function(req, res){
			return {
				retcode: 200,
				data: {
					systemTime: Date.now()
				}
			}
		}
	},
	'com/verifycode': '@image("90x30", "#50B347", "#FFF", "code")'
}