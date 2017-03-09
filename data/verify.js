/**
 * 审核数据模拟文件
 */
'use strict'
module.exports = {
	'audit/audit/todo/query': {
		delay: 300,
		response: responseFunc
	},
	'audit/audit/todo/update': {
		delay: 300,
		response: function(req, res){
			return {
				'retcode|1': [200, 500],
				retdesc: '出错啦啦啦'
			}
		}
	},
	'audit/audit/done/query': {
		delay: 300,
		response: responseFunc
	},
	'audit/audit/undo/query': {
		delay: 300,
		response: responseFunc
	},
	'audit/audit/mine/search': {
		delay: 300,
		response: responseFunc
	},
}

function responseFunc(req, res){
	let results = [];
	for(let i=0; i<10; i++){
	// for(let i=0; i<33; i++){
		// let approvalType = Math.ceil(Math.random()*10),
		let approvalType = i+1,
			data = genData(approvalType)
		
		data.id = i+1
		data.auditId = i+1
		results.push( data ) 
	}

	return{
		'retcode': 200,
		retdesc: '',
		data: {
			// 'totalCount': 33,
			'totalCount': 10,
			result: results
		}
	}
}

const genData = function (type) {
	let approvalData = []
	
	if(type === 1){
		let arr = ['quoteRate', 'quoteExchangeRate', 'effectStatus', 'effectTime']
		for(let i=0; i<4; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1
			})
		}
	} else if(type === 6 || type === 7){
		let arr = ['ladderNo', 'minValue', 'maxValue', 'ladderNo1', 'ladderNo2', 'ladderNo3', 'ladderNo4', 'ladderRateNo1', 'ladderRateNo2', 'ladderRateNo3', 'ladderRateNo4', 'effectStatus', 'effectTime']
		for(let i=0; i<9; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1,
				'dataType|1': [0, 1]
			})
		}
	} else if(type === 8 || type === 9){
		let arr = ['userRiskWarnRate', 'userRiskFrozenRate', 'effectStatus', 'effectTime']
		for(let i=0; i<4; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1
			})
		}
	} else if(type === 3){
		let arr = ['memberType', 'riskWarnRate', 'effectStatus', 'effectTime']
		for(let i=0; i<4; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1
			})
		}
	} else if(type === 2){
		let arr = ['marginRate', 'effectStatus', 'effectTime', 'level']
		for(let i=0; i<4; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1
			})
		}
	} else if(type === 4){
		let arr = ['level', 'marginRate', 'effectStatus', 'effectTime']
		for(let i=0; i<4; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1
			})
		}
	} else if(type === 5){
		let arr = ['level', 'activeThreshold', 'effectStatus', 'effectTime']
		for(let i=0; i<4; i++){
			approvalData.push({
				'dataName|1': arr[i],
				'preData|1-100': 1,
				'aftData|1-100': 1
			})
		}
	} else if(type === 10){ // 商品
		let arr1 = ['commodityId', 'commodityName', 'effectTime', 'contractFactor', 'minPriceMove', 'point', 'defaultMarketDiff', 'maxMarketDiff', 'minMarketDiff', 'limitDiff', 'stopProfitDiff', 'stopLossDiff']		
		for(let i=0; i<11; i++){
			approvalData.push({
				'dataName|1': arr1[i],
				'aftData|1-100': 1,
				'dataType|1': [0]
			})
		}

		let arr2 = ['normalFeeRate', 'advanceFeeRate', 'normalDelayFeeRate', 'advanceDelayFeeRate', 'normalMaxOrderQuantity', 'advanceMaxOrderQuantity', 'normalMaxPositionQuantity', 'advanceMaxPositionQuantity']		
		for(let i=0; i<8; i++){
			approvalData.push({
				'dataName|1': arr2[i],
				'aftData|1-100': 1,
				'dataType|1': [1]
			})
		}
	}
	return {
		'approvalType': type,
		'auditor|1': ['徐静', '梁恒瑞', '郑弋天', '翟宇佳', '徐达迟', '林传伟'],
		auditTime: '@datetime("T")',
		'refusedReason|1': [,'书写不规范', '少填了信息', '你这个是假的！'],
		'proposer|1': ['admin1', 'admin2', 'admin3'],
		proposeTime: '@datetime("T")',
		updateTime: '@datetime("T")',
		'describe|1': ['华泰银 XGA', '华泰银 100g', '标准账户', '基金会员'],
		'approvalStatus|1': [0, 1, 2],
		'itemReturnList': approvalData
	}
}