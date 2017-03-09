/**
 * 实时监控数据模拟文件
 */
'use strict'

module.exports = {
	'monitor/customer/hold/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					// 'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						memberNo: '163',
						'commodityName|1': ['白银1kg', '黄金'],
						'buyOpenAvgPrice|3880-3999.2': 1,
						'buyHoldAvgPrice|3600-4100.2': 1,
						'buyQuantity|1-500': 1,
						'buyFloatPl|1-100.2': 1,
						'sellOpenAvgPrice|3880-3999.2': 1,
						'sellHoldAvgPrice|3600-4100.2': 1,
						'sellQuantity|1-500': 1,
						'sellFloatPl|1-100.2': 1,
						'positionDiff|1-500': 1,
						'sumPl|1': ['3638.82', '3655.00']
					}]
				}
			}
		}
	},
	'monitor/customer/close/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					// 'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						memberNo: '163',
						'commodityName|1': ['白银1kg', '黄金'],
						'buyOpenAvgPrice|3880-3999.2': 1,
						'buyHoldAvgPrice|3600-4100.2': 1,
						'buyCloseAvgPrice|3600-4100.2': 1,
						'buyQuantity|1-500': 1,
						'buyClosePl|1-100.2': 1,
						'sellOpenAvgPrice|3880-3999.2': 1,
						'sellHoldAvgPrice|3600-4100.2': 1,
						'sellCloseAvgPrice|3600-4100.2': 1,
						'sellQuantity|1-500': 1,
						'sellClosePl|1-100.2': 1,
						'buySellDiff|1-500': 1,
						'closePl|1': ['3638.82', '3655.00'],
						'netPl|1': ['3638.82', '3655.00'],
						'fee|1-100': 1
					}]
				}
			}
		}
	},
	'monitor/customer/fund/search': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					'warnRisk|1-1.2': 1 ,
					'forceRisk|0-0.2': 1,
					'totalCount': 33,
					'result|3': [{
						'id|+1': 1,
						traderId: '123456789',
						customerName: '@name',
						memberNo: '@natural',
						'lastCapital|3600-4100.2': 1,
						'curCapital|3600-4100.2': 1,
						'floatPl|1-100.2': 1,
						'frozenMargin|1-1000': 1,
						'margin|0-2': 1,
						'availableMargin|1-1000': 1,
						'lossStatus|1': [0, 1],
						'riskThreshold|1-100': 1,
						// 'riskRate|0-1.2': 1
						'riskRate|1': ["", 2]
					}]
				}
			}
		}
	},
	'monitor/member/position/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						'commodityName|1': ['白银1kg', '黄金'],
						memberNo: '163',
						'memberPosition|1-200': 1,
						'customerPosition|1-200': 1,
						'hedgePosition|1-200': 1,
						'memberClosePl|3600-4100.2': 1,
						'customerClosePl|3600-4100.2': 1,
						'hedgeClosePl|3600-4100.2': 1
					}]
				}
			}
		}
	},
	'monitor/member/close/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						memberNo: '163',
						'commodityName|1': ['白银1kg', '黄金'],
						'buyOpenAvgPrice|3880-3999.2': 1,
						'buyHoldAvgPrice|3600-4100.2': 1,
						'buyCloseAvgPrice|3600-4100.2': 1,
						'buyQuantity|1-500': 1,
						'buyClosePl|1-100.2': 1,
						'sellOpenAvgPrice|3880-3999.2': 1,
						'sellHoldAvgPrice|3600-4100.2': 1,
						'sellCloseAvgPrice|3600-4100.2': 1,
						'sellQuantity|1-500': 1,
						'sellClosePl|1-100.2': 1,
						'buySellDiff|1-500': 1,
						'closePl|1-4.2': 1,
					}]
				}
			}
		}
	},
	'monitor/member/fund/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					// 'totalCount': 33,
					'warnRisk|1-1.2': 1 ,
					'forceRisk|0-0.2': 1,
					'result|3': [{
						'id|+1': 1,
						'memberNo': '163',
						'lastCapital|80-99.2': 1,
						'takeOrderClosePl|36-41.2': 1,
						'hedgeClosePl|1-50.2': 1,
						'settleClosePl|1-100.2': 1,
						'riskMargin|30-999.2': 1,
						'frozenThreshold|30-999.2': 1,
						'diffAmount|3-41.2': 1,
						'sumLastCapital|1-50.2': 1,
						'lastCapitalRate|1-100.2': 1,
						// 'riskRate|0-1.2': 1,
						'riskRate': ""
					}]
				}
			}
		}
	},
	'monitor/special/position/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					'totalCount': 33,
					'result|53': [{
						'id|+1': 1,
						commodityName: '网易贵金属',
						'specialNo': '163',
						'hedgePosition|80-99.2': 1,
						'hedgeFloatPl|36-41.2': 1
					}]
				}
			}
		}
	},
	'monitor/special/hold/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					// 'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						specialNo: '网易贵金属',
						'commodityName|1': ['白银1kg', '黄金'],
						'buyOpenAvgPrice|3880-3999.2': 1,
						'buyHoldAvgPrice|3600-4100.2': 1,
						'buyQuantity|1-500': 1,
						'buyFloatPl|1-100.2': 1,
						'sellOpenAvgPrice|3880-3999.2': 1,
						'sellHoldAvgPrice|3600-4100.2': 1,
						'sellQuantity|1-500': 1,
						'sellFloatPl|1-100.2': 1,
						'positionDiff|1-500': 1,
						'sumPl|1': ['3638.82', '3655.00']
					}]
				}
			}
		}
	},
	'monitor/special/close/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					// 'totalCount': 33,
					'result|33': [{
						'id|+1': 1,
						specialNo: '网易贵金属',
						'commodityName|1': ['白银1kg', '黄金'],
						'buyOpenAvgPrice|3880-3999.2': 1,
						'buyHoldAvgPrice|3600-4100.2': 1,
						'buyCloseAvgPrice|3600-4100.2': 1,
						'buyQuantity|1-500': 1,
						'buyClosePl|1-100.2': 1,
						'sellOpenAvgPrice|3880-3999.2': 1,
						'sellHoldAvgPrice|3600-4100.2': 1,
						'sellCloseAvgPrice|3600-4100.2': 1,
						'sellQuantity|1-500': 1,
						'sellClosePl|1-100.2': 1,
						'closePl|1': ['3638.82', '3655.00'],
						'netPl|1': ['3638.82', '3655.00'],
						'fee|1-100': 1
					}]
				}
			}
		}
	},
	'monitor/special/fund/query': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode': 200,
				retdesc: '',
				data: {
					// 'totalCount': 33,
					'warnRisk|1-1.2': 1 ,
					'forceRisk|0-0.2': 1,
					'result|3': [{
						'id|+1': 1,
						'id|+1': 1,
						specialNo: '163',
						specialName: '@cname',
						'lastCapital|3600-4100.2': 1,
						'closePl|1-100.2': 1,
						'riskMargin|1-200': 1,
						'frozenThreshold|1-1000': 1,
						'diff|1-500': 1,
						// 'riskRate|0-1.2': 1
						'riskRate': ""
					}]
				}
			}
		}
	}
}