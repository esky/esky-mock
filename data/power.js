/**
 * 数据模拟文件
 * http://mockjs.com/examples.html
 */
'use strict'
module.exports = {
	'power/power/manager/search': {
		'retcode': 200,
		'retdesc': 'manager search',
		'data': {
			'result': [{
				'userId': '@string("number", 8)',
				'userCode': '@string("number", 5)',
				'userName': '@cname',
				'system': '@integer(1000, 9999)',
				'memberId': '@string("number", 3)',
				'description': '',
				'isforbid|1': [0,1]
			}],
			'totalCount': 45
		}
	},
	'power/power/manager/insert': {
		'retcode': 200,
		'retdesc': 'manager insert'
	},
	'power/power/manager/update': {
		'retcode': 200,
		'retdesc': 'manager update'
	},
	'power/power/manager/delete': {
		'retcode': 200,
		'retdesc': 'manager delete'
	},
	'power/power/user/search': {
		'retcode': 200,
		'retdesc': 'user search',
		'data': {
			'result': [{
				'userId': '@string("number", 8)',
				'userCode': '@string("number", 5)',
				'userName': '@cname',
				'description': '',
				'isforbid|1': [0,1]
			}],
			'totalCount': 30
		}
	},
	'power/power/user/insert': {
		'retcode': 200,
		'retdesc': 'user insert'
	},
	'power/power/user/update': {
		'retcode': 200,
		'retdesc': 'user update'
	},
	'power/power/user/delete': {
		'retcode': 200,
		'retdesc': 'user delete'
	},
	'power/power/authorize/search': {
		'retcode': 200,
		'retdesc': 'authorize search',
		'data': {
			'result': [{
				'userId': '@string("number", 8)',
				'userCode': '@string("number", 5)',
				'userName': '@cname',
				'roleName|2': ['@string("symbol", 5)'],
				'roleId': [1030, 1040],
				'description': '@string("symbol", 10)'
			}],
			'totalCount': 30
		}
	},
	'power/power/authorize/goauthorize': {
		'retcode': 200,
		'retdesc': 'authorize rolelist',
		'data': {
			'roleList|10': [{
				'roleId|+10': 1000,
				'roleName': '@string("upper", 6)',
				'description': '@string("symbol", 10)'
			}],
			'totalCount': 10
		}
	},
	'power/power/authorize/submit': {
		'retcode': 200,
		'retdesc': 'authorize submit'
	},
	'power/power/role/search': {
		'retcode': 200,
		'retdesc': 'role search',
		'data': {
			'result': [{
				'roleId': '@string("number", 8)',
				'roleType': '@string("number", 5)',
				'roleName': '@cname',
				'description': ''
			}],
			'totalCount': 30
		}
	},
	'power/power/role/insert': {
		'retcode': 200,
		'retdesc': 'role add',
	},
	'power/power/role/update': {
		'retcode': 200,
		'retdesc': 'role update',
	},
	'power/power/role/delete': {
		'retcode': 200,
		'retdesc': 'role delete',
	},
	'power/power/role/authorize': {
		'retcode': 200,
		'retdesc': 'role authorize',
		'data': {
			'menus': [{
				"rightId": "100011",
				"parentId": "10001",
				"rightName": "客户身份查询",
				"rightCode": "account-customer-query",
				"api": "/api/account/customer/query",
				"priority": 1,
				"status": 1
			},{
				"rightId": "100012",
				"parentId": "10001",
				"rightName": "客户身份审核",
				"rightCode": "account-customer-audit",
				"api": "/api/account/customer/audit",
				"priority": 2,
				"status": 1
			},{
				"rightId": "100013",
				"parentId": "10001",
				"rightName": "客户冻结",
				"rightCode": "account-customer-freeze",
				"api": "/api/account/customer/freeze",
				"priority": 3,
				"status": 1
			},{
				"rightId": "100014",
				"parentId": "10001",
				"rightName": "客户解冻",
				"rightCode": "account-customer-unfreeze",
				"api": "/api/account/customer/unfreeze",
				"priority": 4,
				"status": 1
			},{
				"rightId": "100015",
				"parentId": "10001",
				"rightName": "客户强平",
				"rightCode": "account-customer-force",
				"api": "/api/account/customer/force",
				"priority": 5,
				"status": 1
			},{
				"rightId": "200011",
				"parentId": "20001",
				"rightName": "商品设置",
				"rightCode": "commodity-manage-query",
				"api": "/api/commodity/manage/query",
				"priority": 1,
				"status": 1
			}]
		}
	}
}