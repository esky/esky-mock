'use strict'
let resCrt = require('./resCrt');
let bodyParser = require('body-parser');
let multer = require('multer'); 
let cookieParser = require('cookie-parser')
// http://www.expressjs.com.cn/guide/routing.html
module.exports = function(app){
	let conf = global.__mockConf;
	let basePathReg;
	if(conf.base){
		basePathReg = new RegExp('^/'+conf.base+'/');
	}else{
		basePathReg = new RegExp('^/');
	}
	app.use(bodyParser.json()); // for parsing application/json
	app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
	app.use(cookieParser());
	app.use((req, res, next) => {
		console.log(req.method, req.url);
		if(req.method === 'POST'){
			console.log('POST参数', req.body);
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
			console.error('Mock数据规则执行错误', e);
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
}