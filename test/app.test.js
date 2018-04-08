// app.test.js

const request = require('supertest')
const should = require('should')
const app = require('../app')

describe('#Test hs-collection app', () => {
  let server, id

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

    it('#Test POST /enum/add', (done) => {
      let item = {
        key: 'ADD',
        value: '-1',
        name: 'ADD',
        type: 'ADD',
        comment: 'ADD'
      }
      let res = request(server)
                  .post('/enum/add')
                  .send(item)
                  .expect(200)
                  .end((err, res) => {
                    if (err) return done(err)
                    should(res.body.status).equal(200)
                    id = res.body.data._id
                    done()
                  })
    })

    it('#Test POST /enum/update', (done) => {
      let item = {
        _id: id,
        key: 'UPDATE',
        value: '-1',
        name: 'UPDATE',
        type: 'UPDATE',
        comment: 'UPDATE'
      }
      let res = request(server)
                  .post('/enum/update')
                  .send(item)
                  .end((err, res) => {
                    if (err) return done(err)
                    should(res.body.status).equal(200)
                    done()
                  })
    })

    it('#Test DELETE /enum/delete/:id', (done) => {
      let res = request(server)
                  .delete(`/enum/delete/${id}`)
                  .end((err, res) => {
                    if (err) return done(err)
                    should(res.body.status).equal(200)
                    done()
                  })
    })

    it('#Test DELETE /enum/delete/:type', (done) => {
      let type = 'UPDATE'
      let res = request(server)
                  .delete(`/enum/deleteByType/${type}`)
                  .end((err, res) => {
                    if (err) {
                      console.log(err)
                      return done(err)
                    }
                    should(res.body.status).equal(200)
                    done()
                  })
    })
  })

  // card 测试组
  // describe('#Test card controller', () => {
    
  // })
})