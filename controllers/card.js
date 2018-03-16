const Card = require('../models/card')

const getAll = async (ctx, next) => {
  let cards = await Card.find()
  ctx.body = {
    message: '获取成功!',
    data: cards
  }
  next()
}

module.exports = {
  getAll
}
