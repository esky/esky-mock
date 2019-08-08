/**
 * 数据模拟文件
 * http://mockjs.com/examples.html
 * NSIP 后台管理系统 账号管理模块模拟数据模板
 */
'use strict'
module.exports = {
  //客户审核-查询接口
  'account/query': {
    response: function (req, res) {
      return {
        "retcode": 200,
        "retdesc": "retdesc",
        "data": {
          "totalCount": 30,
          "result": [
            {
              "traderId": "@string('number',10)",
              "idCardName": "@cname",
              "accountLevel|0-1": 1,
              "idCardPicStatus|0-3": 1,
              "idCardNo": "@string('number',18)",
              "commitRejectTime|+1": 1483434569921,
              "rejectReason": "@csentence(5,15)",
              "memberNo": "@string('number',3)",
              "brokerNo": "@string('number',3)",
              "idCardFrontImg": "@image()",
              "idCardBackImg": "@image()",
              "idCardHoldImg": "@image()"
            }
          ]
        }
      }
    }
  },
  '/account/account.html': {
    response(req, res) {
      res.redirect('/account/mashang.html?status=1')
    }
  },
  '/account/mashang.html': {
    response(req, res) {
      // 可以操作response对象来响应内容
      setTimeout(() => {
        res.send(`
        <html>
          <head></head>
          <body></body>
        </html>
        `)
      }, 3000)
    }
  }
}
