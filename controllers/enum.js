const Enum = require('../models/enum')
const { ObjectId } = require('mongorito')
const { updateModel } = require('../utils/util')
const { MESSAGE, STATUS } = require('../utils/message')

const getByType = async (ctx, next) => {
  let enums = await Enum.find({
    type: ctx.params.type
  })
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: enums
  }
  next()
}

const add = async (ctx, next) => {
  let item = new Enum(ctx.request.body)
  await item.save()
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: item.get()
  }
  next()
}

const update = async (ctx, next) => {
  let item = await Enum.findOne({
    '_id': ObjectId(ctx.request.body._id)
  })
  if (item === null) {
    ctx.throw(STATUS.notFound, MESSAGE.isNull)
  }
  updateModel(item, ctx.request.body)
  await item.save()
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success,
    data: item.get()
  }
  next()
}

const deleteById = async (ctx, next) => {
  let item = await Enum.findOne({
    '_id': ObjectId(ctx.params.id)
  })
  if (item === null) {
    ctx.throw(STATUS.notFound, MESSAGE.isNull)
  }
  await item.remove()
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success
  }
  next()
}

const deleteByType = async (ctx, next) => {
  let item = await Enum.find({
    'type': ctx.params.type
  })
  if (item.length === 0) {
    ctx.throw(STATUS.notFound, MESSAGE.isNull)
  }
  await Enum.remove({
    'type': ctx.params.type
  })
  ctx.body = {
    status: STATUS.success,
    message: MESSAGE.success
  }
  next()
}

module.exports = {
  getByType,
  add,
  update,
  deleteById,
  deleteByType
}
