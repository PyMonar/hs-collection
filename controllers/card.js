const Card = require('../models/card')
const { ObjectId } = require('mongorito')

const getAll = async (ctx, next) => {
  let cards = await Card.find()
  ctx.body = {
    message: '获取成功!',
    data: cards
  }
  next()
}

const get = async (ctx, next) => {
  let card = await Card.findOne({
    '_id': ObjectId(ctx.params.id)
  })
  ctx.body = {
    message: '获取成功!',
    data: card
  }
  next()
}

module.exports = {
  getAll,
  get
}
