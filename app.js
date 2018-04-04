// 工具
const path = require('path')
const { MESSAGE, STATUS } = require('./utils/message')

// 配置
const config = require('./config')

const Koa = require('koa')
const app = new Koa()
// 引入中间件
const Router = require('koa-router')
const logger = require('koa-logger')
const asset = require('koa-static2')
const bodyParser = require('koa-bodyparser')

// 使用bodyParser
app.use(bodyParser())

// 引入mongoDB
const db = require('./db')
// 链接数据库
db.connect().then(() => {
  console.log(MESSAGE.dbSuccess)
}).catch(() => {
  console.log(MESSAGE.dbFailed)
  db.disconnect()
})

const router = new Router()
// 引入路由
const cardRoutes = require('./routes/card')
const enumRoutes = require('./routes/enum')

// 使用日志中间件
app.use(logger())
// 使用静态资源访问中间件
app.use(asset('/public', path.join(__dirname, config.static)))

// 错误处理中间件
app.use(async(ctx, next) => {
  try {
    ctx.error = (code, message) => {
      ctx.throw(code || STATUS.error, message || MESSAGE.error)
    }
    await next()
  } catch (e) {
    let status = e.status || STATUS.error
    let message = e.message || MESSAGE.error
    ctx.body = { 
      status,
      message
    }
  }
})

// 加载路由
router.use('/card', cardRoutes.routes(), cardRoutes.allowedMethods())
router.use('/enum', enumRoutes.routes(), enumRoutes.allowedMethods())
app.use(router.routes())

// 启动服务
app.listen(config.port)
