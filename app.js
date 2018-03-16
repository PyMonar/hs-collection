const Koa = require('koa')
const Router = require('koa-router')
const db = require('./db')
const app = new Koa()
const router = new Router()

const cardRoutes = require('./routes/card')

// open db connection
db.connect().then(() => {
  console.log('Connect db success!')
}).catch(err => {
  db.disconnect()
})

router.use('/card', cardRoutes.routes(), cardRoutes.allowedMethods())

app.use(router.routes())

app.listen(3000)
