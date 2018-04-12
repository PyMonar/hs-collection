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

  // enum 测试套件
  describe.skip('#Test enum controller', () => {
    it('#Test GET /enum/:type', (done) => {
      let type = 'EXPANSION'
      request(server)
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
      request(server)
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
      request(server)
        .post('/enum/update')
        .send(item)
        .end((err, res) => {
          if (err) return done(err)
          should(res.body.status).equal(200)
          done()
        })
    })

    it('#Test DELETE /enum/delete/:id', (done) => {
      request(server)
        .del(`/enum/delete/${id}`)
        .end((err, res) => {
          if (err) return done(err)
          should(res.body.status).equal(200)
          done()
        })
    })

    it('#Test DELETE /enum/delete/:type', (done) => {
      let type = 'UPDATE'
      request(server)
        .del(`/enum/deleteByType/${type}`)
        .end((err, res) => {
          if (err) {
            console.log(err)
            return done(err)
          }
          should(res.body.status).equal(404)
          done()
        })
    })
  })

  // card 测试套件
  describe('#Test card controller', () => {
    it('#Test GET /card', (done) => {
      request(server)
        .get('/card')
        .set('Accept', 'application/json')
        .expect(200)
        .end((err, res) => {
          if (err) return done(err)
          should(res.body).have.property('data')
          done()
        })
    })

    it('#Test DELETE /card/delete', (done) => {
      let ids = ['5acef8db5b2e0ce662815c00', '5acef8dd5b2e0ce662815c01']
      request(server)
        .del('/card/delete')
        .send({ ids })
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
})
