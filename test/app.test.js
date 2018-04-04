// app.test.js

const request = require('supertest')
const app = require('../app')

describe('#test koa app', () => {
  let server = app.listen(3000)

  describe('#test server', () => {
    it('#test GET /card', async () => {
      let res = await request(server)
                .get('/card')
                // .expect(200, 'OBJECT')
    })
  })
})