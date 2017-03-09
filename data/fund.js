/**
 * 资金管理数据模拟文件
 */
'use strict'

module.exports = {
	'fund/fund/memberio/query': {
		delay: 300,
		response: function (req, res) {
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						'orderId|+1': 12345600,
						operateTime: '@datetime("T")',
						successTime: '@datetime("T")',
						'ioType|1': [0, 1],
						outFundAmount: '@integer(1, 1000)',
						inFundAmount: '@integer(1, 1000)',
						'orderStatus|1': [1, 2, 3]
					}]
				}
			}
		}
	},
	'fund/fund/io/queryfund': {
		delay: 300,
		response: function (req, res) {
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					'result|5': [{
						'id|+1': 1,
						'traderId|+1': '12345643',
						'lastCapital': '654321.00',
						'curCapital': '123456.00',
						'legalOutFund': '654321.78',
					}]
				}
			}
		}
	},
	'fund/fund/io/iofund': {
		delay: 300,
		response: function (req, res) {
			return {
				'retcode|1': [200, 500],
				'retdesc|1': ['资金密码错误', '输入金额超过范围', '网络不给力，请稍后重试', '请求超时，操作失败']
			}
		}
	},
	'fund/fund/pwd/changepwd': {
		delay: 300,
		response: function (req, res) {
			return {
				'retcode|1': [200, 500],
				'retdesc|1': ['原密码输入错误', '新密码不能与原密码相同', '网络不给力，请稍后重试', '请求超时，操作失败']
			}
		}
	}
}