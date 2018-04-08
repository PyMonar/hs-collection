// app.test.js

const request = require('supertest')
const should = require('should')
const app = require('../app')

describe('#Test hs-collection app', () => {
  let server

  // 初始化服务
  before(async () => {
    server = await app.listen(3000)
  })

  // 关闭测试进程
  after(() => {
    process.exit()
  })

  // enum 测试组
  describe('#Test enum controller', () => {
    it('#Test GET /enum/:type', (done) => {
      let type = 'EXPANSION'
      let res = request(server)
                  .get(`/enum/${type}`)
                  .set('Accept', 'application/json')
                  .expect(200)
                  .end((err, res) => {
                    if (err) return done(err)
                    should(res.body).have.property('data')
                    done()
                  })
    })

    // it('#Test GET /enum/add', async () => {
    //   let res = await request(server)
    //               .get('/card')
    // })

    // it('#Test GET /enum/update', async () => {
    //   let res = await request(server)
    //               .get('/card')
    // })

    // it('#Test GET /enum/delete/:id', async () => {
    //   let res = await request(server)
    //               .get('/card')
    // })
  })

  // card 测试组
  // describe('#Test card controller', () => {
    
  // })
})