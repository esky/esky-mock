/**
 * 客户查询数据模拟文件
 * http://mockjs.com/examples.html
 */
'use strict'
module.exports = {
	'statistics/customer/summary/query': {
		delay: 400,
		useMockjs: true,
		response: function(req, res){
			return {
				'retcode': 200,
				'data': {
					'moneyQuery|3': [{
						'id': '@string("number", 8)',
						'lastCapital': '@string("number", 3)',
						'curCapital':'@string("number", 3)',
						'floatPl':'@string("number", 1)',
						'frozenMargin':'@string("number", 5)',
						'margin':'@string("number", 5)',
						'availableMargin':'@string("number", 5)',
						'lossStatus|0-5':1,
						'riskThresholdRate':'@string("number", 2)',
						'riskRate':'@string("number", 2)'
					}],
					'holdQuery|2': [{
						'id': '@string("number", 8)',
						'holdId': '@string("number", 8)',
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'weight':'@string("number", 2)',
						'positoinDirection':['1','2'],
						'openPrice':'@string("number", 4)',
						'holdPrice':'@string("number", 4)',
						'stopLossPrice':'@string("number", 4)',
						'stopProfitPrice':'@string("number", 4)',
						'todayFloatPl|-10000-10000':100,
						'fee|00.2':1,
						'openTime':'@datetime("yyyy-MM-dd")'
					}],
					'closeQuery|2': [{
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'weight':'@string("number", 2)',						
						'orderType|0-3':1,
						'operationType':'0',
						'closeId': '@string("number", 8)',
						'closeDirection|1':['1','2'],
						'openDirection|1':['1','2'],
						'closePrice':'@string("number", 4)',
						'openPrice':'@string("number", 4)',
						'holdPrice':'@string("number", 4)',
						'closePl':'@string("number", 4)',
						'todayClosePl|-10000-10000':100,
						'fee|0.2':1,
						'closeTime':'@datetime("yyyy-MM-dd")',
						'openTime':'@datetime("yyyy-MM-dd")',
						'openId': '@string("number", 6)'						
					}],
					'limitQuery|2': [{
						'limitId': '@string("number", 6)',
						'holdId': '@string("number", 6)',
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'weight':'@string("number", 2)',	
						'limitDirection':['1','2'],
						'limitPrice':'@string("number", 4)',
						'stopLossPrice':'@string("number", 3)',
						'stopProfitPrice':'@string("number", 3)',
						'expireTime':'@datetime("yyyy-MM-dd")',
						'limitTime':'@datetime("yyyy-MM-dd")'			
					}],
					'totalWeightQuery|3': [{
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'holdTotalWeight':'@string("number", 2)',	
						'limitTotalWeight':'@string("number", 2)',	
						'totalWeight':'@string("number", 2)'
					}]
				}
			}
		}
	},
	
	'statistics/customer/cutback/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 14,
					"result": [
						{
							"memberName|1": ['网易贵金属','其他会员'],
							"traderId": '@string("number", 6)',
							"idCardName": "@cname",
							"forceCloseMargin": '@string("number", 4)',
							"forceCloseCapital": '@string("number", 4)',
							"forceCloseRiskRate|0-100": 1,
							"backFund": '@string("number", 4)',
							"time":  '@datetime("yyyy-MM-dd HH:mm:ss")'
						}
					]
				}
			}
		}
	},
	'statistics/customer/fundio/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 43,
					"result": [
						{
							"traderId": '@string("number", 6)',
							"customerName": "@cname",
							"brokerCode": '@string("number", 3)',
							"memberCode": '@string("number", 3)',
							"tradeIoNo": '@string("number", 5)',
							"tradeIoType|0-12":1,
							"bankName": '网易宝',
							'amount|-10000-10000':100,
							"date":  '@datetime("yyyy-MM-dd HH:mm:ss")'
						}
					]
				}
			}
		}
	},
	'statistics/customer/close/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 43,
					"result": [{
						"traderId": '@string("number", 6)',
						"idCardName": "@cname",
						"brokerName|1":['经纪会员1','经纪会员2'],
						"memberName|1": ['基金会员1','基金会员2'],
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'weight':'@string("number", 2)',
						'closePl':'@string("number", 4)',
						'fee|0.2':1,
						'openOrderId': '@string("number", 8)',
						'closeOrderId': '@string("number", 8)',
						'openPositionDirection|1':['1','2'],
						'closePositionDirection|1':['1','2'],
						'openPrice':'@string("number", 4)',
						'closePrice':'@string("number", 4)',
						'holdPrice':'@string("number", 4)',
						'openTime':'@datetime("yyyy-MM-dd")',
						'closeTime':'@datetime("yyyy-MM-dd")',
						'openOrderType|1':['市价下单','指价下单'],
						'closeOrderType|1':['市价下单','指价下单'],
					}]
				}
			}
		}
	},
	'statistics/customer/hold/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 33,
					"result": [{
						'id': '@string("number", 8)',
						'detailId': '@string("number", 8)',
						'traderId': '@string("number", 8)',
						"idCardName": "@cname",
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'memberTraderId':'@string("number", 3)',
						'quantity|1-10':1,
						'weight':'@string("number", 2)',
						'priceType|1':[1,2],
						'positionDirection|1':['1','2'],
						'tradeOpenPrice':'@string("number", 4)',
						'holdPrice':'@string("number", 4)',
						'stopLossPrice':'@string("number", 4)',
						'stopProfitPrice':'@string("number", 4)',
						'realPl':'@string("number", 4)',
						'openTime':'@datetime("yyyy-MM-dd")'
					}]
				}
			}
		}
	},
	'statistics/customer/open/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 22,
					"result": [{
						'openId': '@string("number", 8)',
						'traderId': '@string("number", 8)',
						'memberId': '@string("number", 8)',
						"idCardName": "@cname",
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'weight':'@string("number", 2)',
						'operType|1':['0','1','2'],
						'positionDirection|1':['0','1','2'],
						'openPrice':'@string("number", 4)',
						'fee|0.2':1,						
						'openTime':'@datetime("yyyy-MM-dd")'
					}]
				}
			}
		}
	},
	'statistics/customer/limit/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 14,
					"result": [{
						'id': '@string("number", 8)',
						'limitId': '@string("number", 8)',
						'traderId': '@string("number", 8)',
						"memberName|1": ['基金会员1','基金会员2'],
						"customerName": "@cname",
						'commodityId|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'amount':'@string("number", 2)',
						'positionDirection|1':['1','2'],
						'orderPrice':'@string("number", 4)',
						'slPrice':'@string("number", 4)',
						'tpPrice':'@string("number", 4)',
						'orderTime':'@datetime("yyyy-MM-dd")',
						'isDeal|1':['0','1']
					}]
				}
			}
		}
	},
	'statistics/customer/fund/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					"result|2-4": [
						{
							"memberCode": '@string("number", 3)',
							"brokerCode": '@string("number", 3)',
							"memberName|1": ['基金会员1','基金会员2'],
							"brokerName|1": ['经纪会员1','经纪会员2'],
							"traderId": '@string("number", 6)',
							"idCardName": "@cname",
							"lastCapital": '@string("number", 4)',
							"ioFund": '@string("number", 4)',
							"closePl": '@string("number", 4)',
							"holdPl": '@string("number", 5)',
							'fee|0.2':1,	
							"margin": '@string("number", 5)',
							"availableMargin": '@string("number", 5)',
							"frozenMargin": '@string("number", 5)',
							'frozenFee|0.2':1,
							"curCapital": '@string("number", 5)',
							"riskRate|1-99": 1
						}
					],
					"total":{
						"totalLastCapital": "@string('number', 4)",
						"totalIoFund": '@string("number", 4)',
						"totalClosePl": '@string("number", 4)',
						"totalFrozenFee|0.2": 1,
						"totalFee|0.2": 1,
						"totalMargin": '@string("number", 5)',
						"totalAvailableMargin": '@string("number", 5)',
						"totalFrozenMargin": '@string("number", 5)',
						"totalCurCapital": '@string("number", 5)',
						"totalHoldPl": '@string("number", 5)'
					}
				
				}
			}
		}
	},
	'statistics/member/close/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 53,
					"result": [{
						"specialName|1":['特别会员1','特别会员2'],
						"memberName|1": ['基金会员1','基金会员2'],
						'commodityName|1': ['华泰银1', '华泰金2', '华泰铜3'],
						'quantity|1-10':1,
						'weight':'@string("number", 2)',
						'closePl':'@string("number", 4)',
						'fee|0.2':1,
						'openOrderId': '@string("number", 8)',
						'closeOrderId': '@string("number", 8)',
						'openPositionDirection|1':['1','2'],
						'closePositionDirection|1':['1','2'],
						'openPrice':'@string("number", 4)',
						'closePrice':'@string("number", 4)',
						'holdPrice':'@string("number", 4)',
						'openTime':'@datetime("yyyy-MM-dd")',
						'closeTime':'@datetime("yyyy-MM-dd")'
					}]
				}
			}
		}
	},
	'statistics/member/fund/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 41,
					"result|5": [
						{
							"memberCode": '@string("number", 3)',
							"memberName|1": ['基金会员1','基金会员2'],
							"lastCapital": '@string("number", 4)',
							"ioFund": '@string("number", 4)',
							"closePl": '@string("number", 4)',
							"settlePl": '@string("number", 5)',
							'fee|0.2':1,
							"hedgeMargin": '@string("number", 5)',
							"curCapital": '@string("number", 5)',
							"riskRate|1-99": 1
						}
					],
					"totalLastCapital": "@string('number', 4)",
					"totalIoFund": '@string("number", 4)',
					"totalClosePl": '@string("number", 4)',
					"totalFee|0.2": 1,
					"totalHedgeMargin": '@string("number", 5)',
					"totalCurCapital": '@string("number", 5)',
					"totalHoldPl": '@string("number", 5)'
				}
			}
		}
	},
	'statistics/member/fundio/query':{
		delay: 300,
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 31,
					"result|43": [
						{
							"tradeIoNo": '@string("number", 6)',
							"memberCode": '@string("number", 3)',
							"memberName|1": ['基金会员1','基金会员2'],
							"tradeIoType|0-12":1,
							"bankName": '网易宝',
							'amount|-10000-10000':100,
							"date":  '@datetime("yyyy-MM-dd HH:mm:ss")'
						}
					]
				}
			}
		}
	},
	'statistics/broker/fund/query':{
		response: function(req,res){
			return {
				"retcode":200,
				"retdesc":'',
				"data":{
					"totalFeeIncome": "@string('number',5)",
					"result|1-5": [
						{
						"brokerCode": "@string('number',3)",
						"brokerName": "@cname(3)",
						"lastCapital": "@string('number',3)",
						"ioFund": "@string('number',3)",
						"feeIncome": "@string('number',3)",
						"date": 1484106806751
						}
					]
				}
			}
		}
	},
	'statistics/broker/fundio/query':{
		response: function(req,res){
			return {
				"retcode":200,
				"retdesc":'',
				"data":{
					"totalCount": 30,
					"result": [{
						"brokerCode": "@string('number',3)",
						"brokerName": "@cname(3)",
						"tradeIoNo": "@string('number',10)",
						"tradeIoType|1-3": 1, 
						"bankName": "@cname(3)",
						"amount": "@string('number',3)",
						"date": 1484106806751
					}]
				}
			}
		}
	},
	'statistics/special/close/query': {
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 50,
					"result|50": [
						{
							"traderId": "测试内容12345",
							"memberId": "测试内容12345",
							"memberName": "测试内容12345",
							"specialId": "测试内容12345",
							"specialName": "测试内容12345",
							"commodityName": "测试内容12345",
							"quantity": 123456,
							"weight": 123456,
							"closeAmount": "测试内容12345",
							"closePl": "测试内容12345",
							"openOrderId": "测试内容12345",
							"openPositionDirection|1-2": 1,
							"openPrice": "测试内容12345",
							"openTime": 123456,
							"openOrderType": "测试内容12345",
							"holdPrice": "测试内容12345",
							"holdOrderId": "测试内容12345",
							"closeOrderId": "测试内容12345",
							"closePositionDirection|1-2": 1,
							"closePrice": "测试内容12345",
							"closeTime": 123456,
							"closeOrderType": "测试内容12345"
						}
					]
				}
			}
		}
	},
	'statistics/special/fund/query': {
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					"result|5": [
						{
							"specialId|1-100": 1,
							"specialName": "@cname",
							"lastCapital|2000-5000.2": 1,
							"ioFund|1-1000": 1,
							"closePl|1-100": 1,
							"holdPl|1-100": 1,
							"curCapital|2000-5000.2": 1,
							"riskRate|0.2": 1
						}
					],
					"total":{
						"totalLastCapital": "@string('number', 4)",
						"totalIOFund": '@string("number", 4)',
						"totalClosePl": '@string("number", 4)',
						"totalHoldPl": '@string("number", 4)',
						"totalCurCapital": '@string("number", 5)'
					}
				}
			}
		}
	},
	'statistics/special/fundio/query': {
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 50,
					"result|50": [
						{
							"specialCode": "测试内容12345",
							"specialName": "测试内容12345",
							"tradeIoNo": "测试内容12345",
							"tradeIoType|1": [1,2,3],
							"bankName": "测试内容12345",
							"amount": "测试内容12345",
							"date": 123456
						}
					]
				}
			}
		}
	},
	'statistics/special/hold/query': {
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 50,
					"result|50": [
						{
							'holdId': '@string("number", 7)',
							'traderId': '@string("number", 9)',
							'memberId': '@string("number", 3)',
							'memberName': "@cname",
							'specialId|1-10': 1,
							'specialName|1': '@cname',
							'commodityName|1': ['华泰银100KG', '华泰银10KG', '华泰银1KG'],
							'positionDirection|0-2': 1,
							'openQuantity|40-60': 1,
							'holdQuantity|40-60': 1,
							'orderType|0-2': 1,
							'holdPrice|3000-4000': 1,
							'openPrice|3000-4000': 1,
							'holdPl|3000-3200': 1,
							'floatPl|20': 1,
							'actualPl|80': 1,
							'delayFee': '@string("number", 3)',						
							'openTime': '@datetime("yyyy-MM-dd hh:mm:ss")'
						}
					]
				}
			}
		}
	},
	'statistics/special/open/query': {
		response: function(req, res){
			return {
				"retcode": 200,
				"retdesc": '',
				"data": {
					'totalCount': 50,
					"result|50": [
						{
							'openId': '@string("number", 7)',
							'traderId': '@string("number", 9)',
							'memberId': '@string("number", 3)',
							'memberName': '@cname',
							'specialId|1-10': 1,
							'specialName|1': "@cname",
							'commodityName|1': ['华泰银100KG', '华泰银10KG', '华泰银1KG'],
							'quantity|1': ['10', '100', '1000'],
							'weight': '@string("number", 2)',
							'openAmount|100000-200000.1': 1.0,
							'positionDirection|0-2': 1,
							'orderType|0-2': 1,
							'openPrice': '@string("number", 4)',						
							'openTime': '@datetime("yyyy-MM-dd")'
						}
					]
				}
			}
		}
	}
}