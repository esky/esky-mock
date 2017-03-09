/**
 * 假数据服务器
 * 20161215 by esky
 */
'use strict'
let express = require('express');
let app = express();
let conf = require('../conf');
let resCrt = require('./resCrt');
let watcher = require('./watcher');
let basePathReg = new RegExp('^/'+conf.base+'/');
console.log(basePathReg)
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
	let path = req.path.replace(basePathReg, '');
	let resObj;
	try{
		resObj = resCrt(path, req, res);
	} catch(e){
		console.log('Mock数据规则执行错误', e);
		res.status(500).send('Mock数据规则执行错误');
	}
	if(resObj.isOk){
		setTimeout(function() {
			res.json(resObj.response);
		}, resObj.delay === undefined ?  conf.delay : resObj.delay);
	}else{
		console.log('无法匹配', path);
		res.status(404).send('无法匹配该请求');
	}
})
let server = app.listen(conf.port, () => {
	let host = server.address().address;
	let port = server.address().port;
	console.log('Mock服务启动（http://%s:%s）', host, port);
	watcher.start()
});