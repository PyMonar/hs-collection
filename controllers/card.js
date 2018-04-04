const Card = require('../models/card')
const { ObjectId } = require('mongorito')
const { MESSAGE, STATUS } = require('../utils/message')

const getAll = async (ctx, next) => {
  let cards = await Card.find()
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: cards
  }
  next()
}

const get = async (ctx, next) => {
  let card = await Card.findOne({
    '_id': ObjectId(ctx.params.id)
  })
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: card
  }
  next()
}

module.exports = {
  getAll,
  get
}
