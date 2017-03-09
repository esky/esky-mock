/**
 * 数据模拟文件
 */
'use strict'
const base = require('./base')
const fund = require('./fund')
const goods = require('./goods')
const monitor = require('./monitor')
const operation = require('./operation')
const param = require('./param')
const power = require('./power')
const stats = require('./stats')
const user = require('./user')
const verify = require('./verify')

module.exports = Object.assign({}, base, fund, goods, monitor, operation, param, power, stats, user, verify);