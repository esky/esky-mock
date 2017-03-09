/**
 * 参数设置数据模拟文件
 */
'use strict'

module.exports = {
	'param/fundthreshold/ladder/query': {
		'retcode': 200,
		retdesc: '',
		data: {
			'totalCount': 16,
			'result': [{
				'id|+1': 1,
				'ladderNo|1': ['1', '2', '3', '4'],
				'maxValue|1': ['3000000', '5000000', '7000000', '1000000'],
				'effectStatus|1': [0, 1],
				'effectTime': '@datetime("yyyy-MM-dd")'
			}]
		}
	},
	'param/fundthreshold/ladder/update': {
		// 'retcode|1': [200, 404],
		'retcode': 200,
		retdesc: ''
	},
	'param/fundthreshold/rate/updaterate': {
		// 'retcode|1': [200, 404],
		'retcode': 200,		
		retdesc: ''
	},
	'param/fundthreshold/rate/queryrate': {
		retcode: 200,
		retdesc: '',
		data: {
			"ladderNo1": {
				"minValue": "100000",
				"maxValue": "300000"
			},
			"ladderNo2": {
				"minValue": "300000",
				"maxValue": "500000"
			},
			"ladderNo3": {
				"minValue": "500000",
				"maxValue": "700000"
			},
			"ladderNo4": {
				"minValue": "700000",
				"maxValue": "1000000"
			},
			'result|2': [{
				'typeName': "0",
				'ladderNo1': '@string("number", 2)',
				'ladderNo2': '@string("number", 2)',
				'ladderNo3': '@string("number", 2)',
				'ladderNo4': '@string("number", 2)',
				'effectStatus|1': [0, 1],
				'effectTime': 1484303473000
			}]
		}
	},
	'param/fundthreshold/show/searchiofund': {
		retcode: 200,
		retdesc: '',
		data: {
			'result': [{
				"memberCode": '@string("number", 3)',
				"memberName|1": ['基金会员1', '基金会员2'],
				'relativeOutFund|100000-1000000': 1,
				'positiveOutFund|100000-1000000': 1,
				'realOutFund|100000-1000000': 1,
			}],
			'totalCount': 6
		}
	},
	//汇率|重量换算设置
	'param/quotation/manage/query': {
		'retcode': 200,
		'retdesc': 'quotation query',
		data: {
			'result|2': [{
				'commodityName': '华泰银',
				'commodityCode': 'XAG',
				'quoteRate': '@float(10,100,1,4)',
				'quoteExchangeRate': '@float(0,10,1,4)',
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd HH:mm:ss")'
			}]
		}
	},
	'param/quotation/manage/immediate': {
		'retcode': 200,
		'retdesc': 'quotation immediate'
	},
	'param/quotation/manage/update': {
		'retcode': 200,
		'retdesc': 'quotation update'
	},
	// 保证金比例查询
	'param/margin/manage/query': {
		retcode: 200,
		retdesc: 'margin rate',
		data: {
			'result|2': [{
				'level': 0,
				'marginRate|1': [3, 4, 5, 6, 7, 8, 9, 10],
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}, {
				'level': 1,
				'marginRate|1': [3, 4, 5, 6, 7, 8, 9, 10],
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}],
			'totalCount': 4
		}
	},
	// 保证金比例修改
	'param/margin/manage/update': {
		retcode: 200,
		retdesc: 'margin rate update'
	},
	// 客户保证金比例查询
	'param/marginrate/manage/query': {
		retcode: 200,
		retdesc: 'customer margin rate',
		data: {
			'result': [{
				'traderId': '928826782637',
				'traderName': '张三',
				'level': 0,
				'memberCode': '123981923',
				'marginRate|1': [3, 4, 5, 6, 7, 8, 9, 10],
				'effectStatus': 1,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}, {
				'traderId': '928826782637',
				'traderName': '张三',
				'level': 0,
				'memberCode': '123981923',
				'marginRate|1': [3, 4, 5, 6, 7, 8, 9, 10],
				'effectStatus': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}],
			'totalCount': 2
		}
	},
	// 客户保证金比例修改
	'param/marginrate/manage/update': {
		retcode: 200,
		retdesc: 'customer margin rate update'
	},
	// 激活门槛查询
	'param/active/manage/query': {
		retcode: 200,
		retdesc: 'active query',
		data: {
			'result|2': [{
				'level': 0,
				'activeThreshold': '@integer(1000, 999999)',
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}, {
				'level': 1,
				'activeThreshold': '@integer(1000, 999999)',
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}],
			'totalCount': 4
		}
	},
	// 激活门槛修改
	'param/active/manage/update': {
		retcode: 200,
		retdesc: 'active update'
	},
	// 会员风险率查询
	'param/memberrisk/manage/query': {
		retcode: 200,
		retdesc: 'active query',
		data: {
			'result|2': [{
				'memberType': 2,
				'riskWarnRate': '@integer(0,200)',
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}, {
				'memberType': 3,
				'riskWarnRate': '@integer(0,200)',
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}],
			'totalCount': 4
		}
	},
	// 会员风险率修改
	'param/memberrisk/manage/update': {
		retcode: 200,
		retdesc: 'active update'
	},
	// 客户风险率查询
	'param/customerrisk/manage/query': {
		retcode: 200,
		retdesc: 'active query',
		data: {
			'result|2': [{
				'userRiskWarnRate': '@integer(0,200)',
				'userRiskFrozenRate': '@integer(0,200)',
				'effectStatus|+1': 0,
				'effectTime': '@datetime("yyyy-MM-dd")'
			}],
			'totalCount': 2
		}
	},
	// 客户风险率修改
	'param/customerrisk/manage/update': {
		retcode: 200,
		retdesc: 'active update'
	}
}