/**
 * response响应生成器
 * rule = {
 * 	isOk: true,
 * 	delay: 500,
 * 	response: Object/Function
 * }
 */
'use strict'
const chokidar = require('chokidar');
const Mockjs = require('mockjs');
const apiAdapter = require('./apiAdapter');

function findRule(path){
	// 若文件变动，需更新模块缓存
	let data = require(global.__mockDataDir);
	return data[path] || data['/' + path];
}
module.exports = function(path, req, res){
	let rule = findRule(path);
	let rs = { 
		isOk: false,
		useMockjs: true
	};
	if(!rule) return rs;
	if(typeof rule === 'string' || !rule.response){
		rs.response = rule;
	}
	rs.isOk = true;
	rs = Object.assign(rs, rule);
	if(typeof rs.response === 'function'){
		rs.response = rs.response(req, res);
	}
	// 使用Mock解析
	if(rs.useMockjs){
		rs.response = apiAdapter(rs.response, req, res);
		rs.response = Mockjs.mock(rs.response);
	}
	return rs;
}