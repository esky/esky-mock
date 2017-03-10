#!/usr/bin/env node

'use strict'
let program = require('commander');
let pkg = require('../../package');
let defaultConf = require('./defaultConf');
let server = require('../server');
let path = require('path');
program
	.version(pkg.version)
	.option('-v, --version', '版本号')
	.option('-p --port [port]', '服务器端口 默认3334', parseInt)
	.option('-c --config [config]', '配置JSON文件路径')
	.parse(process.argv);

let getConfig = function() {
	let cfg;
	if(program.config){
		let confJson =  require(path.resolve(program.config));
		cfg = Object.assign({}, defaultConf, confJson);
	}else{
		cfg = defaultConf;
	}
	if(program.port){
		cfg.port = program.port;
	}
	return cfg;
};

let conf = getConfig();
server(conf)