/**
 * 后台菜单源数据
 */
'use strict';
module.exports = [{
	"rightId": "1000",
	"parentId": "0",
	"rightName": "账户管理",
	"rightCode": "account",
	"api": "/api/account",
	"priority": 1,
	"status": 1,
	"nodes": [{
		"rightId": "10001",
		"parentId": "1000",
		"rightName": "客户管理",
		"rightCode": "account-customer",
		"api": "/api/account/customer",
		"priority": 1,
		"status": 1,
		"nodes": [{
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
		}
		]
	}]
},
{
	"rightId": "2000",
	"parentId": "0",
	"rightName": "商品配置",
	"rightCode": "commodity",
	"api": "/api/commodity",
	"priority": 2,
	"status": 1,
	"nodes": [{
		"rightId": "20001",
		"parentId": "2000",
		"rightName": "商品管理",
		"rightCode": "commodity-manage",
		"api": "/api/commodity/manage",
		"priority": 1,
		"status": 1,
		"nodes": [{
			"rightId": "200011",
			"parentId": "20001",
			"rightName": "商品设置",
			"rightCode": "commodity-manage-query",
			"api": "/api/commodity/manage/query",
			"priority": 1,
			"status": 1
		}]
	}]
},
{
	"rightId": "3000",
	"parentId": "0",
	"rightName": "统计查询",
	"rightCode": "statistics",
	"api": "/api/statistics",
	"priority": 3,
	"status": 1,
	"nodes": [{
		"rightId": "30001",
		"parentId": "3000",
		"rightName": "客户查询",
		"rightCode": "statistics-customer",
		"api": "/api/statistics/customer",
		"priority": 1,
		"status": 1,
		"nodes": [{
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
		}
		]
	},
	{
		"rightId": "30002",
		"parentId": "3000",
		"rightName": "经纪会员查询",
		"rightCode": "statistics-broker",
		"api": "/api/statistics/broker",
		"priority": 2,
		"status": 1,
		"nodes": [{
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
		}
		]
	},
	{
		"rightId": "30003",
		"parentId": "3000",
		"rightName": "基金会员查询",
		"rightCode": "statistics-member",
		"api": "/api/statistics/member",
		"priority": 3,
		"status": 1,
		"nodes": [{
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
		}
		]
	},
	{
		"rightId": "30004",
		"parentId": "3000",
		"rightName": "特别会员查询",
		"rightCode": "statistics-special",
		"api": "/api/statistics/special",
		"priority": 4,
		"status": 1,
		"nodes": [{
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
		}
		]
	}
	]
},
{
	"rightId": "4000",
	"parentId": "0",
	"rightName": "实时监控",
	"rightCode": "monitor",
	"api": "/api/monitor",
	"priority": 4,
	"status": 1,
	"nodes": [{
		"rightId": "40001",
		"parentId": "4000",
		"rightName": "客户实时监控",
		"rightCode": "monitor-customer",
		"api": "/api/monitor/customer",
		"priority": 1,
		"status": 1,
		"nodes": [{
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
		}
		]
	},
	{
		"rightId": "40002",
		"parentId": "4000",
		"rightName": "基金会员监控",
		"rightCode": "monitor-member",
		"api": "/api/monitor/member",
		"priority": 2,
		"status": 1,
		"nodes": [{
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
		}
		]
	},
	{
		"rightId": "40003",
		"parentId": "4000",
		"rightName": "特别会员监控",
		"rightCode": "monitor-special",
		"api": "/api/monitor/special",
		"priority": 3,
		"status": 1,
		"nodes": [{
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
		}
		]
	}
	]
},
{
	"rightId": "5000",
	"parentId": "0",
	"rightName": "权限管理",
	"rightCode": "power",
	"api": "/api/power",
	"priority": 5,
	"status": 1,
	"nodes": [{
		"rightId": "50001",
		"parentId": "5000",
		"rightName": "权限管理",
		"rightCode": "power-power",
		"api": "/api/power/power",
		"priority": 1,
		"status": 1,
		"nodes": [{
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
		}
		]
	}]
},
{
	"rightId": "6000",
	"parentId": "0",
	"rightName": "运营管理",
	"rightCode": "operate",
	"api": "/api/operate",
	"priority": 6,
	"status": 1,
	"nodes": [{
		"rightId": "60001",
		"parentId": "6000",
		"rightName": "运营管理",
		"rightCode": "operate-operate",
		"api": "/api/operate/operate",
		"priority": 1,
		"status": 1,
		"nodes": [{
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
		}
		]
	}]
},
{
	"rightId": "7000",
	"parentId": "0",
	"rightName": "参数设置",
	"rightCode": "param",
	"api": "/api/param",
	"priority": 7,
	"status": 1,
	"nodes": [{
		"rightId": "70001",
		"parentId": "7000",
		"rightName": "汇率/重量换算设置",
		"rightCode": "param-quotation",
		"api": "/api/param/quotation",
		"priority": 1,
		"status": 1,
		"nodes": [{
			"rightId": "700011",
			"parentId": "70001",
			"rightName": "设置",
			"rightCode": "param-quotation-manage",
			"api": "/api/param/quotation/manage",
			"priority": 1,
			"status": 1
		}]
	},
	{
		"rightId": "70002",
		"parentId": "7000",
		"rightName": "客户保证金比例",
		"rightCode": "param-marginrate",
		"api": "/api/param/marginrate",
		"priority": 2,
		"status": 1,
		"nodes": [{
			"rightId": "700021",
			"parentId": "70002",
			"rightName": "设置",
			"rightCode": "param-marginrate-manage",
			"api": "/api/param/marginrate/manage",
			"priority": 1,
			"status": 1
		}]
	},
	{
		"rightId": "70003",
		"parentId": "7000",
		"rightName": "会员风险率",
		"rightCode": "param-memberrisk",
		"api": "/api/param/memberrisk",
		"priority": 3,
		"status": 1,
		"nodes": [{
			"rightId": "700031",
			"parentId": "70003",
			"rightName": "设置",
			"rightCode": "param-memberrisk-manage",
			"api": "/api/param/memberrisk/manage",
			"priority": 1,
			"status": 1
		}]
	},
	{
		"rightId": "70004",
		"parentId": "7000",
		"rightName": "保证金比例设置",
		"rightCode": "param-margin",
		"api": "/api/param/margin",
		"priority": 4,
		"status": 1,
		"nodes": [{
			"rightId": "700041",
			"parentId": "70004",
			"rightName": "设置",
			"rightCode": "param-margin-manage",
			"api": "/api/param/margin/manage",
			"priority": 1,
			"status": 1
		}]
	},
	{
		"rightId": "70005",
		"parentId": "7000",
		"rightName": "激活门槛设置",
		"rightCode": "param-active",
		"api": "/api/param/active",
		"priority": 5,
		"status": 1,
		"nodes": [{
			"rightId": "700051",
			"parentId": "70005",
			"rightName": "设置",
			"rightCode": "param-active-manage",
			"api": "/api/param/active/manage",
			"priority": 1,
			"status": 1
		}]
	},
	{
		"rightId": "70006",
		"parentId": "7000",
		"rightName": "会员出金阈值设置",
		"rightCode": "param-fundthreshold",
		"api": "/api/param/fundthreshold",
		"priority": 6,
		"status": 1,
		"nodes": [{
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
		}
		]
	},
	{
		"rightId": "70007",
		"parentId": "7000",
		"rightName": "客户风险率设置",
		"rightCode": "param-customerrisk",
		"api": "/api/param/customerrisk",
		"priority": 7,
		"status": 1,
		"nodes": [{
			"rightId": "700071",
			"parentId": "70007",
			"rightName": "客户风险率设置",
			"rightCode": "param-customerrisk-manage",
			"api": "/api/param/customerrisk/manage",
			"priority": 1,
			"status": 1
		}]
	}
	]
},
{
	"rightId": "8000",
	"parentId": "0",
	"rightName": "审核",
	"rightCode": "audit",
	"api": "/api/audit",
	"priority": 8,
	"status": 1,
	"nodes": [{
		"rightId": "80001",
		"parentId": "8000",
		"rightName": "审核",
		"rightCode": "audit-audit",
		"api": "/api/audit/audit",
		"priority": 1,
		"status": 1,
		"nodes": [{
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
		}
		]
	}]
},
{
	"rightId": "9000",
	"parentId": "0",
	"rightName": "资金管理",
	"rightCode": "fund",
	"api": "/api/fund",
	"priority": 9,
	"status": 1,
	"nodes": [{
		"rightId": "90001",
		"parentId": "9000",
		"rightName": "资金管理",
		"rightCode": "fund-fund",
		"api": "/api/fund/fund",
		"priority": 1,
		"status": 1,
		"nodes": [{
			"rightId": "900011",
			"parentId": "90001",
			"rightName": "会员出入金",
			"rightCode": "fund-fund-memberio",
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
	}]
}
]