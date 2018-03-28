const Koa = require('koa')
const app = new Koa()
// 引入中间件
const Router = require('koa-router')
const logger = require('koa-logger')
const static = require('koa-static2')
const bodyParser = require('koa-bodyparser')

// 引入mongoDB
const db = require('./db')
// 链接数据库
db.connect().then(() => {
  console.log('Connect db success!')
}).catch(() => {
  db.disconnect()
})


const router = new Router()
// 引入路由
const cardRoutes = require('./routes/card')


// 使用日志中间件
app.use(logger())
// 使用静态资源访问中间件
app.use(static('/public', __dirname + '/public'))

// 使用bodyParser
app.use(bodyParser())

// 加载路由
router.use('/card', cardRoutes.routes(), cardRoutes.allowedMethods())
app.use(router.routes())

// 启动服务
app.listen(3000)
