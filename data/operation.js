/**
 * 数据模拟文件
 * http://mockjs.com/examples.html
 */
'use strict'
module.exports = {
	'operate/operate/market/search': {
		'retcode': 200,
		'data': {
			'status|1': [1,2,3],
			'tradeTime': 1484480800000,
			'tradeMode|1': [0,1]
		}
	},
	'operate/operate/market/readytrade': {
		'retcode': 200,
		'retdesc': 'ready trade'
	},
	'operate/operate/market/resume': {
		'retcode': 200,
		'retdesc': 'ready trade'
	},
	'operate/operate/market/stoptrade': {
		'retcode': 200,
		'retdesc': 'stop trade'
	},
	'operate/operate/market/endtrade': {
		'retcode': 200,
		'retdesc': 'end trade'
	},
	'operate/operate/tradedayset/search': {
		'retcode': 200,
		'data': {
			'weeklyTradeDay|3-5': [{
				'day|+1': ['1','2','3','4','5'],
				'section': ['101','102','103','104','105','106','107','108']
			}],
			'specialTradeDay': [{
				'day': '2017-08-10',
				'section': ['101','102','103','104','105','106','107']
			}],
			'unTradeDay' : ['2017-02-12']
		}
	},
	'operate/operate/tradedayset/submit': {
		'retcode|1': [200,500],
		'retdesc': 'set tradeDay'
	},
	'operate/operate/tradedayset/searchsection': {
		'retcode': 200,
		'retdesc': 'trade searchsection',
		'data': {
			'result': [{
				startTime: '06:00',
				endTime: '08:00',
				tradeSectionName: '交易节1',
				tradeSectionId: '101',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '08:00',
				endTime: '10:00',
				tradeSectionName: '交易节2',
				tradeSectionId: '102',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '10:00',
				endTime: '12:00',
				tradeSectionName: '交易节3',
				tradeSectionId: '103',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '12:00',
				endTime: '14:00',
				tradeSectionName: '交易节4',
				tradeSectionId: '104',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '14:00',
				endTime: '16:00',
				tradeSectionName: '交易节5',
				tradeSectionId: '105',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '16:00',
				endTime: '20:00',
				tradeSectionName: '交易节6',
				tradeSectionId: '106',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '20:00',
				endTime: '24:00',
				tradeSectionName: '交易节7',
				tradeSectionId: '107',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '次日00:00',
				endTime: '次日02:00',
				tradeSectionName: '交易节8',
				tradeSectionId: '108',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '次日02:00',
				endTime: '次日04:00',
				tradeSectionName: '交易节9',
				tradeSectionId: '109',
				status: 0,
				'goodsId|1': ['1212','2312','2123']
			}]
		}
	},
	'operate/operate/tradesection/search': {
		'retcode': 200,
		'retdesc': 'trade section',
		'data': {
			'result': [{
				startTime: '06:00',
				endTime: '08:00',
				tradeSectionName: '交易节1',
				tradeSectionId: '101',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '08:00',
				endTime: '10:00',
				tradeSectionName: '交易节2',
				tradeSectionId: '102',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '10:00',
				endTime: '12:00',
				tradeSectionName: '交易节3',
				tradeSectionId: '103',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '12:00',
				endTime: '14:00',
				tradeSectionName: '交易节4',
				tradeSectionId: '104',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '14:00',
				endTime: '16:00',
				tradeSectionName: '交易节5',
				tradeSectionId: '105',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '16:00',
				endTime: '20:00',
				tradeSectionName: '交易节6',
				tradeSectionId: '106',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '20:00',
				endTime: '24:00',
				tradeSectionName: '交易节7',
				tradeSectionId: '107',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '次日00:00',
				endTime: '次日02:00',
				tradeSectionName: '交易节8',
				tradeSectionId: '108',
				status: 1,
				'goodsId|1': ['1212','2312','2123']
			},{
				startTime: '次日02:00',
				endTime: '次日04:00',
				tradeSectionName: '交易节9',
				tradeSectionId: '109',
				status: 0,
				'goodsId|1': ['1212','2312','2123']
			}]
		}
	},
	'operate/operate/exchange/search': {
		'retcode': 200,
		'retdesc': 'exchange search',
		'data': {
			'tradeMode|1': [0,1],
			'prepareSec': 3600,
			'prepareId': '@id'
		}
	},
	'operate/operate/exchange/update': {
		'retcode|1': [200, 500],
		'retdesc': 'exchange update'
	},
	'operate/operate/tradedayquery/search': {
		delay: 300,
		response: function(req, res) {
			var query = req.query,
				date = new Date(),
				month = date.getMonth(),
				start = 1,
				tradeDays = [];
			date.setTime(query.searchTime)
			date.setDate(start)
			while (date.getDate() === start) {
				if (date.getDay() > 0 && date.getDay() < 6) {
					tradeDays.push({
						tradeDay: date.getTime(),
						openTime: '',
						closeTime: ''
					})
				}
				date.setDate(++start)
			}
			return {
				retcode: 200,
				retdesc: 'trade days',
				data: {
					day: tradeDays
				}
			}
		}
	},
	'operate/operate/tradedayquery/searchtime': {
		retcode: 200,
		retdesc: 'trade detail',
		data: {
			openTime: '@time',
			closeTime: '@time'
		}
	}
}