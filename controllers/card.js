const Card = require('../models/card')
const { ObjectId } = require('mongorito')
const { updateModel } = require('../utils/util')
const { MESSAGE, STATUS } = require('../utils/message')

const getAll = async (ctx, next) => {
  let cards = await Card.find(ctx.params)
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

const add = async (ctx, next) => {
  let card = new Card(ctx.request.body)
  await card.save()
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: card.get()
  }
  next()
}

const update = async (ctx, next) => {
  let card = await Card.findOne({
    '_id': ObjectId(ctx.request.body._id)
  })
  if (card === null) {
    ctx.throw(STATUS.notFound, MESSAGE.isNull)
  }
  updateModel(card, ctx.request.body)
  await card.save()
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: card.get()
  }
  next()
}

const deleteByIds = async (ctx, next) => {
  let ids = ctx.request.body.ids
  ids = ids.map(id => {
    return ObjectId(id)
  })
  let condition = {
    '_id': {
      '$in': ids
    }
  }
  await Card.remove(condition)
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success
  }
  next()
}

module.exports = {
  getAll,
  get,
  add,
  update,
  deleteByIds
}
