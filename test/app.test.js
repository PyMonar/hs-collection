// app.test.js

const request = require('supertest')
const app = require('../app')
const should = require('should')

describe('#test koa app', () => {
  let server

  // 初始化服务
  before(async () => {
    server = await app.listen(3000)
  })

  // 关闭测试进程
  after(() => {
    process.exit()
  })

  describe('#test server', () => {
    it('#test GET /card', async () => {
      let res = await request(server)
                  .get('/card')
                  .expect(200, {"status":200,"message":"操作成功!","data":[{"_id":"5aab7e636b5f0b3c812f0fd4","name":"Angry chicken"}]})
    })
  })
})