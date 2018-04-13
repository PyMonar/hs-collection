/**
 * 系统用到的消息枚举
 */

const MESSAGE = {
  success: '操作成功!',
  failed: '操作失败!',
  isNull: '对象不存在!',
  error: '服务器错误!',
  dbSuccess: '数据库连接成功!',
  dbFailed: '数据库连接失败!'
}

const STATUS = {
  success: 200,
  error: 500,
  notFound: 404
}

module.exports = {
  MESSAGE,
  STATUS
}
