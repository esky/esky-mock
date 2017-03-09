/**
 * 数据模拟文件
 * http://mockjs.com/examples.html
 * NSIP 后台管理系统 账号管理模块模拟数据模板
 */
'use strict'
module.exports = {
	//客户查询-查询接口
	'account/customer/query/query': {
		delay: 300,
		response: function(req,res){
			return {
				'retcode': 200,
				'retdesc': 'retdesc',
				'data': {
					"totalCount": 33,
					"result": [
					{
						"traderId": "@string('number',10)",
						"idCardName": '@cname',
						"accountLevel|0-1": 1,
						"customerStatus|0-5": 1,
						"idCardPicStatus|0-3": 1,
						"riskStatus|0-1": 1,
						"openAccountTime|+1": 1483434569921,
						"memberNo": "@string('number',3)",
						"brokerNo": "@string('number',3)",
						"frozenStatus|0-1": 1,
						"idCardNo": "@string('number',18)",
						"commonPhone": "@string('number',11)",
						"activeTime|+1": 1483434569921,
						"frozenTime|+1": 1483434569921,
						"unfrozenTime|+1": 1483434569921
						}
					],
				}
			}
		}
	},

	//客户审核-查询接口
	'account/customer/audit/query': {
		response: function(req,res){
			return {
				"retcode": 200,
				"retdesc": "retdesc",
				"data": {
					"totalCount": 30,
					"result": [
					{
					"traderId": "@string('number',10)",
					"idCardName": "@cname",
					"accountLevel|0-1": 1,
					"idCardPicStatus|0-3": 1,
					"idCardNo": "@string('number',18)",
					"commitRejectTime|+1": 1483434569921,
					"rejectReason": "@csentence(5,15)",
					"memberNo": "@string('number',3)",
					"brokerNo": "@string('number',3)",
					"idCardFrontImg": "@image()",
					"idCardBackImg": "@image()",
					"idCardHoldImg": "@image()"
					}
					]
				}
			}
		}
	},

	//客户审核-审核接口
	'account/customer/audit/audit': {
		response: function(req,res){
			return {
			'retcode|1': [200,404],
			'retdesc': 'retdesc'
			}
		}
	},

	//客户审核-身份证图片请求接口
	'account/customer/audit/getImg': {
		response: function(req,res){
			return {
				'retcode':200,
				'retdesc':'retdesc',
				'img':"@image()"
			}
		}
	},

	//客户冻结-查询接口
	'account/customer/freeze/query': {
		'retcode':200,
		'retdesc': 'retdesc',
		'data':{
			"totalCount": 25,
			"result": [
				{
				"traderId": "@string('number',10)",
				"idCardName": "@cname",
				"customerStatus|0-5": 1,
				"accountLevel|0-1": 1,
				"memberNo": "@string('number',3)",
				"brokerNo": "@string('number',3)",
				}
			]
		}
	},

	//客户冻结-冻结接口
	'account/customer/freeze/freeze': {
		response: function(req,res){
			return {
			'retcode|1': [200,404],
			'retdesc': 'retdesc'
			}
		}
	},

	//客户解冻-查询接口
	'account/customer/unfreeze/query': {
		'retcode':200,
		'retdesc': 'retdesc',
		'data':{
			"totalCount": 28,
			"result": [
				{
				"traderId": "@string('number',10)",
				"idCardName": "@cname",
				"accountLevel|0-1": 1,
				"customerStatus|0-5": 1,
				"frozenStatus|0-1":1,
				"frozenTime|+1": 1483434569921,
				"frozenReason": "@csentence(5,15)",
				"memberNo": "@string('number',3)",
				"brokerNo": "@string('number',3)",
				}
			]
		}
	},

	//客户解冻-解冻接口
	'account/customer/unfreeze/unfreeze': {
		response: function(req,res){
			return {
			'retcode|1': [200,404],
			'retdesc': 'retdesc'
			}
		}
	},

	//客户强平-查询接口
	'account/customer/force/query': {
		'retcode':200,
		'retdesc': 'retdesc',
		'data':{
			"result": [
				{
				"traderId": "@string('number',10)",
				"idCardName": "@cname",
				"curCapital": "@string('number',5)",
				"margin":"@string('number',5)",
				"riskRate|1":"@float(0,100,1,3)"
				}
			]
		}
	},

	//客户强平-强平接口
	'account/customer/force/force': {
		response: function(req,res){
			return {
			'retcode|1': [200,404],
			'retdesc': 'retdesc'
			}
		}
	},
}
