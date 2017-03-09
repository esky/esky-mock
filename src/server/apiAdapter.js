'use strict'
module.exports = function(rs, req, res){
	let query = req.query;
	// 匹配分页接口
	if(query.pageSize && rs.data && rs.data.result){
		let data = rs.data;
		let pageSize = +query.pageSize;
		let pageNo = +query.pageNo||1;
		let total = data.totalCount||1;
		let result = data.result;
		// for(let k in data){
		// 	if(/^result/.test(k)){
		// 		result = data[k];
		// 		delete data[k];
		// 		break;
		// 	}
		// }
		// if(!result){
		// 	return rs;
		// }
		data.pageNo = pageNo;
		data.pageSize = pageSize;
		data.totalCount = total;
		let remain = total-pageSize*(pageNo-1);
		if(remain>pageSize){
			data['result|' + pageSize] = result;
		}else{
			data['result|' + remain] = result;
		}
		delete data.result;
	}
	return rs;
}