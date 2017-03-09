### 普通接口
+ 异常码code，正常为200
+ 接口异常都应该有描述msg

~~~js
// 普通接口
{
	// 响应码 Number, 200为正常
	"code": 200,
	// 响应描述 String
	"msg": '',
	// 响应数据 Object
	"data": {}
}
~~~

### 列表接口

> 分页参数 
1. 当前页码 pageNo
2. 每页大小 pageSize
3. 排序字段 sortField（仅支持单字段排序）
4. 排序方向 sortOrder = desc/asc
5. 过滤字段（...）

~~~js
// 列表接口 （有且仅有一个结果集result)
{
	"code": 200,
	"msg": '',
	// 响应数据 Object
	"data": {
		// 列表数据 Array
		"result": [],
		// 下面是分页属性，不分页则没有
		// 当前页号 int，从1开始
		"pageNo": 2,
		// 每页记录数 int
		"pageSize": 20,
		// 总条数 int
		"totalCount": 2,
		// 总页数 int
		"totalPage": 2
	}
}
~~~

### 示例
~~~js
// 正常接口
{
	"code": 200,
	// 非必须
	"msg": '成功',
	"data": {

	}
}
~~~
~~~js
// 异常接口
{
	"code": 5001,
	"msg": '业务异常描述',
	// 非必须
	"data": {
		// 异常处理所需数据
	}
}
~~~
~~~js
// 普通接口，可含多个列表数组
{
	"code": 200,
	"data": {
		"list1": [],
		"list2": [],
		"status": 2
	}
}
~~~

~~~js
// 列表接口
{
	"code": 200,
	// 响应数据 Object
	"data": {
		// 列表数据 Array
		"result": [],
		// ===分页属性，start===
		// 当前页号 int，从1开始
		"pageNo": 2,
		// 每页记录数 int
		"pageSize": 20,
		// 总条数 int
		"totalCount": 2,
		// 总页数 int
		"totalPage": 2,
		// ===分页属性，end===
		// 其他属性
		"bizOther1": "",
		// 其他属性
		"bizOther2": ""
	}
}
// 列表接口（不分页）
{
	"code": 200,
	// 响应数据 Object
	"data": {
		// 列表数据 Array
		"result": []
	}
}
~~~