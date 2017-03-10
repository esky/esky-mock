/**
 * 假数据服务器
 * 20161215 by esky
 */
'use strict'
let express = require('express');
let app = express();
let watcher = require('./watcher');
let path = require('path');
let route = require('./route')
let basePathReg;

module.exports = function(conf){
	if(!conf.port){
		console.error('Mock服务缺少合法端口');
		return;
	}
	if(!conf.dataDir){
		console.error('Mock服务缺少合法假数据文件');
		return;
	}
	// 配置文件缓存
	global.__mockConf = conf;
	// 数据文件完整路径
	global.__mockDataDir = path.resolve(conf.dataDir);
	route(app);
	let server = app.listen(conf.port, () => {
		let host = server.address().address;
		let port = server.address().port;
		console.log('Mock服务启动（http://%s:%s）', host, port);
		watcher.start()
	});
}
