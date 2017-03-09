/**
 * 后台菜单源数据
 */
'use strict';
module.exports = [
	{
		"rightId": "100011",
		"parentId": "10001",
		"rightName": "客户身份查询",
		"rightCode": "account-customer-query",
		"api": "/api/account/customer/query",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "100012",
		"parentId": "10001",
		"rightName": "客户身份审核",
		"rightCode": "account-customer-audit",
		"api": "/api/account/customer/audit",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "100013",
		"parentId": "10001",
		"rightName": "客户冻结",
		"rightCode": "account-customer-freeze",
		"api": "/api/account/customer/freeze",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "100014",
		"parentId": "10001",
		"rightName": "客户解冻",
		"rightCode": "account-customer-unfreeze",
		"api": "/api/account/customer/unfreeze",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "100015",
		"parentId": "10001",
		"rightName": "客户强平",
		"rightCode": "account-customer-force",
		"api": "/api/account/customer/force",
		"priority": 5,
		"status": 1
	},
	{
		"rightId": "200011",
		"parentId": "20001",
		"rightName": "商品设置",
		"rightCode": "commodity-manage-query",
		"api": "/api/commodity/manage/query",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "300011",
		"parentId": "30001",
		"rightName": "客户综合查询",
		"rightCode": "statistics-customer-summary",
		"api": "/api/statistics/customer/summary",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "300012",
		"parentId": "30001",
		"rightName": "客户建仓查询",
		"rightCode": "statistics-customer-open",
		"api": "/api/statistics/customer/open",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "300013",
		"parentId": "30001",
		"rightName": "客户指价查询",
		"rightCode": "statistics-customer-limit",
		"api": "/api/statistics/customer/limit",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "300014",
		"parentId": "30001",
		"rightName": "客户持仓查询",
		"rightCode": "statistics-customer-hold",
		"api": "/api/statistics/customer/hold",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "300015",
		"parentId": "30001",
		"rightName": "客户平仓查询",
		"rightCode": "statistics-customer-close",
		"api": "/api/statistics/customer/close",
		"priority": 5,
		"status": 1
	},
	{
		"rightId": "300016",
		"parentId": "30001",
		"rightName": "客户资金查询",
		"rightCode": "statistics-customer-fund",
		"api": "/api/statistics/customer/fund",
		"priority": 6,
		"status": 1
	},
	{
		"rightId": "300017",
		"parentId": "30001",
		"rightName": "客户资金流水查询",
		"rightCode": "statistics-customer-fundio",
		"api": "/api/statistics/customer/fundio",
		"priority": 7,
		"status": 1
	},
	{
		"rightId": "300021",
		"parentId": "30002",
		"rightName": "经纪会员资金查询",
		"rightCode": "statistics-broker-fund",
		"api": "/api/statistics/broker/fund",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "300022",
		"parentId": "30002",
		"rightName": "经纪会员资金流水查询",
		"rightCode": "statistics-broker-fundio",
		"api": "/api/statistics/broker/fundio",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "300031",
		"parentId": "30003",
		"rightName": "基金会员平仓查询",
		"rightCode": "statistics-member-close",
		"api": "/api/statistics/member/close",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "300032",
		"parentId": "30003",
		"rightName": "基金会员资金查询",
		"rightCode": "statistics-member-fund",
		"api": "/api/statistics/member/fund",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "300033",
		"parentId": "30003",
		"rightName": "基金会员资金流水查询",
		"rightCode": "statistics-member-fundio",
		"api": "/api/statistics/member/fundio",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "300041",
		"parentId": "30004",
		"rightName": "特别会员接收建仓查询",
		"rightCode": "statistics-special-open",
		"api": "/api/statistics/special/open",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "300042",
		"parentId": "30004",
		"rightName": "特别会员接收持仓查询",
		"rightCode": "statistics-special-hold",
		"api": "/api/statistics/special/hold",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "300043",
		"parentId": "30004",
		"rightName": "特别会员接收平仓查询",
		"rightCode": "statistics-special-close",
		"api": "/api/statistics/special/close",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "300044",
		"parentId": "30004",
		"rightName": "特别会员资金流水查询",
		"rightCode": "statistics-special-fundio",
		"api": "/api/statistics/special/fundio",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "300045",
		"parentId": "30004",
		"rightName": "特别会员资金明细查询",
		"rightCode": "statistics-special-fund",
		"api": "/api/statistics/special/fund",
		"priority": 5,
		"status": 1
	},
	{
		"rightId": "400011",
		"parentId": "40001",
		"rightName": "客户持仓监控",
		"rightCode": "monitor-customer-hold",
		"api": "/api/monitor/customer/hold",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "400012",
		"parentId": "40001",
		"rightName": "平仓",
		"rightCode": "monitor-customer-close",
		"api": "/api/monitor/customer/close",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "400013",
		"parentId": "40001",
		"rightName": "资金明细",
		"rightCode": "monitor-customer-fund",
		"api": "/api/monitor/customer/fund",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "400021",
		"parentId": "40002",
		"rightName": "会员头寸",
		"rightCode": "monitor-member-position",
		"api": "/api/monitor/member/position",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "400022",
		"parentId": "40002",
		"rightName": "会员平仓",
		"rightCode": "monitor-member-close",
		"api": "/api/monitor/member/close",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "400023",
		"parentId": "40002",
		"rightName": "资金明细",
		"rightCode": "monitor-member-fund",
		"api": "/api/monitor/member/fund",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "400031",
		"parentId": "40003",
		"rightName": "特别会员头寸监控",
		"rightCode": "monitor-special-position",
		"api": "/api/monitor/special/position",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "400032",
		"parentId": "40003",
		"rightName": "特别会员接收持仓单监控",
		"rightCode": "monitor-special-hold",
		"api": "/api/monitor/special/hold",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "400033",
		"parentId": "40003",
		"rightName": "特别会员接收平仓单监控",
		"rightCode": "monitor-special-close",
		"api": "/api/monitor/special/close",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "400034",
		"parentId": "40003",
		"rightName": "特别会员资金明细监控",
		"rightCode": "monitor-special-fund",
		"api": "/api/monitor/special/fund",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "500011",
		"parentId": "50001",
		"rightName": "会员超级管理员",
		"rightCode": "power-power-manager",
		"api": "/api/power/power/manager",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "500012",
		"parentId": "50001",
		"rightName": "角色分配",
		"rightCode": "power-power-authorize",
		"api": "/api/power/power/authorize",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "500013",
		"parentId": "50001",
		"rightName": "用户管理",
		"rightCode": "power-power-user",
		"api": "/api/power/power/user",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "500014",
		"parentId": "50001",
		"rightName": "角色管理",
		"rightCode": "power-power-role",
		"api": "/api/power/power/role",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "600011",
		"parentId": "60001",
		"rightName": "交易所市场开休市管理",
		"rightCode": "operate-operate-market",
		"api": "/api/operate/operate/market",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "600012",
		"parentId": "60001",
		"rightName": "交易所交易日设置",
		"rightCode": "operate-operate-tradedayset",
		"api": "/api/operate/operate/tradedayset",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "600013",
		"parentId": "60001",
		"rightName": "交易所交易节设置",
		"rightCode": "operate-operate-tradesection",
		"api": "/api/operate/operate/tradesection",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "600014",
		"parentId": "60001",
		"rightName": "交易所交易日查询",
		"rightCode": "operate-operate-tradedayquery",
		"api": "/api/operate/operate/tradedayquery",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "600015",
		"parentId": "60001",
		"rightName": "交易所开市设置",
		"rightCode": "operate-operate-exchange",
		"api": "/api/operate/operate/exchange",
		"priority": 5,
		"status": 1
	},
	{
		"rightId": "700011",
		"parentId": "70001",
		"rightName": "设置",
		"rightCode": "param-quotation-manage",
		"api": "/api/param/quotation/manage",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "700021",
		"parentId": "70002",
		"rightName": "设置",
		"rightCode": "param-marginrate-manage",
		"api": "/api/param/marginrate/manage",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "700031",
		"parentId": "70003",
		"rightName": "设置",
		"rightCode": "param-memberrisk-manage",
		"api": "/api/param/memberrisk/manage",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "700041",
		"parentId": "70004",
		"rightName": "设置",
		"rightCode": "param-margin-manage",
		"api": "/api/param/margin/manage",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "700051",
		"parentId": "70005",
		"rightName": "设置",
		"rightCode": "param-active-manage",
		"api": "/api/param/active/manage",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "700061",
		"parentId": "70006",
		"rightName": "资金阶梯",
		"rightCode": "param-fundthreshold-ladder",
		"api": "/api/param/fundthreshold/ladder",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "700062",
		"parentId": "70006",
		"rightName": "资金阶梯比例",
		"rightCode": "param-fundthreshold-rate",
		"api": "/api/param/fundthreshold/rate",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "700063",
		"parentId": "70006",
		"rightName": "出金阈值展示",
		"rightCode": "param-fundthreshold-show",
		"api": "/api/param/fundthreshold/show",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "700071",
		"parentId": "70007",
		"rightName": "客户风险率设置",
		"rightCode": "param-customerrisk-manage",
		"api": "/api/param/customerrisk/manage",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "800011",
		"parentId": "80001",
		"rightName": "待审核",
		"rightCode": "audit-audit-todo",
		"api": "/api/audit/audit/todo",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "800012",
		"parentId": "80001",
		"rightName": "审核通过",
		"rightCode": "audit-audit-done",
		"api": "/api/audit/audit/done",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "800013",
		"parentId": "80001",
		"rightName": "审核驳回",
		"rightCode": "audit-audit-undo",
		"api": "/api/audit/audit/undo",
		"priority": 3,
		"status": 1
	},
	{
		"rightId": "800014",
		"parentId": "80001",
		"rightName": "我提交",
		"rightCode": "audit-audit-mine",
		"api": "/api/audit/audit/mine",
		"priority": 4,
		"status": 1
	},
	{
		"rightId": "900011",
		"parentId": "90001",
		"rightName": "会员出入金",
		"rightCode": "fund-fund-ioquery",
		"api": "/api/fund/fund/memberio",
		"priority": 1,
		"status": 1
	},
	{
		"rightId": "900012",
		"parentId": "90001",
		"rightName": "出入金操作",
		"rightCode": "fund-fund-io",
		"api": "/api/fund/fund/io",
		"priority": 2,
		"status": 1
	},
	{
		"rightId": "900013",
		"parentId": "90001",
		"rightName": "修改资金密码",
		"rightCode": "fund-fund-pwd",
		"api": "/api/fund/fund/pwd",
		"priority": 3,
		"status": 1
	}
]