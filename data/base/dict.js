/**
 * 后台数据字典数据
 */
'use strict';
module.exports = { 
	// 基金会员
	member: [{ code: '@id', name: '基金会员1', num: 123 }, { code: '@id', name: '基金会员2', num: 145 }],
	// 经纪会员
	broker: [{ code: '@id', name: '经济会员1', num: 132 }, { code: '@id', name: '经济会员2', num: 199 }],
	// 超级会员
	special: [{ code: '@id', name: '超级会员1', num: 123 }, { code: '@id', name: '超级会员2', num: 333 }],
	// 银行
	bank: [{ code: '@id', name: '网易宝' }, { code: '@id', name: '招商银行' }],
	// 商品
	commodity: [{ code: '@id', name: '白银1kg' }, { code: '@id', name: '黄金' }],
	// 成交类型
	fundType: [{ code: '1', name: '市价下单' }, { code: '2', name: '指价下单' }, { code: '3', name: '手动强平' }, { code: '4', name: '自动强平' }],
	// 审核状态
	"approvalStatus": [{ "code": 0, "name": "审核通过" }, { "code": 1, "name": "审核驳回" }, { "code": 2, "name": "待审核" }, { "code": 3, "name": "审核撤销" }], 
	// 审核类型
	// "approvalType": [
		// { "code": 1, "name": "汇率/换算单位调整" }, 
		// { "code": 2, "name": "出金阈值调整" }, 
		// { "code": 3, "name": "客户风险率调整" }, 
		// { "code": 4, "name": "会员风险率调整" },
		// { "code": 5, "name": "客户保证金比例定制" }, 
		// { "code": 6, "name": "保证金比例调整" }, 
		// { "code": 7, "name": "激活门槛调整" }, 
		// { "code": 8, "name": "添加商品" }],
	"approvalType": [
		{ "code": 1, "name": "汇率/换算单位调整" }, 
		{ "code": 2, "name": "客户保证金比例定制" }, 		
		{ "code": 3, "name": "会员风险率调整" }, 
		{ "code": 4, "name": "保证金比例调整" }, 
		{ "code": 5, "name": "激活门槛调整" }, 
		{ "code": 6, "name": "会员资金梯度设置" }, 
		{ "code": 7, "name": "相对出金阈值调整" }, 
		{ "code": 8, "name": "客户强平风险率设置" },
		{ "code": 9, "name": "客户预警风险率设置" },
		{ "code": 10, "name": "添加商品" },
	],
	// 资金流水类型 
	"fundBill": [{ "code": 0, "name": "出金" }, { "code": 1, "name": "入金" }, { "code": 2, "name": "斩仓回退" }, { "code": 3, "name": "建仓手续费" }, { "code": 4, "name": "平仓手续费" }, { "code": 5, "name": "平仓盈亏" }, { "code": 6, "name": "结算盈亏" }, { "code": 7, "name": "延期费" }, { "code": 8, "name": "接收建仓手续费" }, { "code": 9, "name": "接收平仓手续费" }, { "code": 10, "name": "接收平仓盈亏" }, { "code": 11, "name": "接收延期费" }, { "code": 12, "name": "接收结算盈亏" }], 
	// 账号等级	
	"accountLevel": [{ "code": 0, "name": "普通客户" }, { "code": 1, "name": "高级客户" }], 
	// 客户状态
	"customerStatus": [{ "code": 0, "name": "已开户" }, { "code": 1, "name": "已签约" }, { "code": 2, "name": "正常交易" }, { "code": 3, "name": "亏损报警" }, { "code": 4, "name": "亏损超限" }, { "code": 5, "name": "已签退" }], 
 	// 买卖方向
	"positionDirector": [{ "code": 1, "name": "买入" }, { "code": 2, "name": "卖出" }], 
	// 身份证审核状态
	"idApprovalStatus": [{ "code": 0, "name": "未上传身份证图片" }, { "code": 1, "name": "已上传图片" }, { "code": 2, "name": "审核通过" }, { "code": 3, "name": "审核未通过" }], 
	// 商品状态 
	"commodityStatus": [{ "code": 0, "name": "暂停" }, { "code": 1, "name": "正常" }], 
	// 冻结状态
	"frozenStatus": [{ "code": 0, "name": "未冻结" }, { "code": 1, "name": "冻结" }], 
	// 风险测评
	"riskStatus": [{ "code": 0, "name": "未做风险评估" }, { "code": 1, "name": "已做风险评估" }] 
}

// 基金会员
	// member: [{ code: '@id', name: '基金会员1' }, { code: '@id', name: '基金会员2' }],
	// // 经纪会员
	// broker: [{ code: '@id', name: '经济会员1' }, { code: '@id', name: '经济会员2' }],
	// // 超级会员
	// special: [{ code: '@id', name: '超级会员1' }, { code: '@id', name: '超级会员2' }],
	// // 账号等级	
	// accountLevel: [{ code: '0', name: '普通客户' }, { code: '1', name: '高级客户' }],
	// // 客户状态
	// customerStatus: [{ code: '1', name: '已开户' }, { code: '2', name: '已激活' }, { code: '3', name: '已交易' }, { code: '4', name: '已签退' }, { code: '5', name: '亏损预警' }, { code: '6', name: '亏损超限' }],
	// // 风险测评
	// riskStatus: [{ code: '0', name: '未评测' }, { code: '1', name: '已评测' }],
	// // 冻结状态
	// frozenStatus: [{ code: '0', name: '未冻结' }, { code: '1', name: '冻结中' }],
	// // 身份证审核状态
	// idApprovalStatus: [{ code: '0', name: '未上传身份证图片' }, { code: '1', name: '已上传图片' }, { code: '2', name: '审核通过' }, { code: '3', name: '审核未通过' }],
	// // 商品状态 
	// commodityStatus: [{ code: '0', name: '待上市' }, { code: '1', name: '已上市' }],
	// // 买卖方向
	// positionDirector: [{ code: '1', name: '多' }, { code: '2', name: '空' }],
	// // 成交类型
	// fundType: [{ code: '1', name: '市价下单' }, { code: '2', name: '指价下单' }, { code: '3', name: '手动强平' }, { code: '4', name: '自动强平' }],
	// // 商品
	// commodity: [{ code: '@id', name: '白银1kg' }, { code: '@id', name: '黄金' }],
	// // 银行
	// bank: [{ code: '@id', name: '网易宝' }, { code: '@id', name: '招商银行' }],
	// // 资金流水类型
	// fundBill: [{ code: '0', name: '出金' }, { code: '1', name: '入金' }, { code: '2', name: '斩仓回退' }, { code: '3', name: '客户(基金)建仓手续费' }, { code: '4', name: '客户(基金)平仓手续费' }, { code: '5', name: '客户(基金)平仓盈亏' }, { code: '6', name: '客户(基金) 结算盈亏' }, { code: '7', name: '延期费' }, { code: '8', name: '接收建仓手续费' }, { code: '9', name: '接收平仓手续费' }, { code: '10', name: '接收平仓盈亏' }, { code: '11', name: '接收延期费' }, { code: '12', name: '接收结算盈亏' }],
	// // 审核类型
	// approvalType: [{ code: '1', name: '汇率/换算单位调整' }, { code: '2', name: '出金阈值调整' }, { code: '3', name: '客户风险率调整' }, { code: '4', name: '会员风险率调整' }, { code: '5', name: '客户保证金比例定制' }, { code: '6', name: '保证金比例调整' }, { code: '7', name: '激活门槛调整' }, { code: '8', name: '添加商品' }],
	// // 审核状态
	// approvalStatus: [{ code: '2', name: '待审核' }, { code: '1', name: '审核驳回' }, { code: '0', name: '审核通过' }],