/**
 * NSIP 后台管理系统 商品管理模块模拟数据模板
 */

'use strict';
module.exports = {
	'commodity/manage/query/query':{
		response:function(req,res){
			return {
		'retcode':200,
		'retdesc': 'retdesc',
		'data':{
			"result|5-10": [
				{
				"commodityId": "@string('upper',3)",
				"commodityName": "@cword(3)",
				"effectStatus|0-1": 1,
				"effectTime|+1": 1483443787061,
				"contractFactor": "@string('number',3)",
				"minPriceMove|1":["0.01","1.00"],
				"point": "@string('number',3)",
				"defaultMarketDiff": "@string('number',3)",
				"maxMarketDiff": "@string('number',3)",
				"minMarketDiff": "@string('number',3)",
				"limitDiff": "@string('number',3)",
				"stopProfitDiff": "@string('number',3)",
				"stopLossDiff": "@string('number',3)",
				"normalFeeRate": "@string('number',3)",
				"normalDelayFeeRate": "@string('number',3)",
				"normalMaxOrderQuantity": "@string('number',3)",
				"normalMaxPositionQuantity": "@string('number',3)",
				"advanceFeeRate": "@string('number',3)",
				"advanceDelayFeeRate": "@string('number',3)",
				"advanceMaxOrderQuantity": "@string('number',3)",
				"advanceMaxPositionQuantity": "@string('number',3)",
				}
			]
		}
			}
		}
	},

	'commodity/manage/query/update':{
		response: function(req,res){
			return {
				'retcode|1':[200,404],
				'retdesc': 'retdesc'
			}
		}
	},

	'commodity/manage/query/delete':{
		response: function(req,res){
			return {
				'retcode|1':[200,404],
				'retdesc': 'retdesc'
			}
		}
	},
}
