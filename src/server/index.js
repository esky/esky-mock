/**
 * 假数据服务器
 * 20161215 by esky
 */
'use strict'
let express = require('express');
let app = express();
let resCrt = require('./resCrt');
let watcher = require('./watcher');
let path = require('path');
let basePathReg;
// http://www.expressjs.com.cn/guide/routing.html
// 日志
app.use((req, res, next) => {
	console.log(req.method, req.url);
	if(req.method === 'POST'){
		console.log('POST参数', req.query);
	}
	next();
})
app.use((req, res, next) => {
	// 去除base路径
	let curPath = req.path.replace(basePathReg, '');
	let resObj;
	try{
		resObj = resCrt(curPath, req, res);
	} catch(e){
		console.log('Mock数据规则执行错误', e);
		res.status(500).send('Mock数据规则执行错误');
	}
	if(resObj.isOk){
		setTimeout(function() {
			res.json(resObj.response);
		}, resObj.delay === undefined ?  conf.delay : resObj.delay);
	}else{
		console.log('无法匹配', curPath);
		res.status(404).send('无法匹配该请求');
	}
})
module.exports = function(conf){
	if(!conf.port){
		console.error('Mock服务缺少合法端口');
		return;
	}
	if(!conf.dataDir){
		console.error('Mock服务缺少合法假数据文件');
		return;
	}
	if(conf.base){
		basePathReg = new RegExp('^/'+conf.base+'/');
	}else{
		basePathReg = new RegExp('^/');
	}
	// 数据文件完整路径
	global.__mockDataDir = path.resolve(conf.dataDir);
	let server = app.listen(conf.port, () => {
		let host = server.address().address;
		let port = server.address().port;
		console.log('Mock服务启动（http://%s:%s）', host, port);
		watcher.start()
	});
}
