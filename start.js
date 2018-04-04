const config = require('./config')
const app = require('./app')

// 启动服务
app.listen(config.port)
