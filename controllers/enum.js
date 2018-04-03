const Enum = require('../models/enum')
const { ObjectId } = require('mongorito')
const { updateModel } = require('../utils/util')

const getByType = async (ctx, next) => {
  let enums = await Enum.find({
    type: ctx.params.type
  })
  ctx.body = {
    message: '获取成功!',
    data: enums
  }
  next()
}

const add = async (ctx, next) => {
  let item = new Enum(ctx.request.body)
  await item.save()
  ctx.body = {
    message: '新增成功!',
    data: item.get()
  }
  next()
}

const update = async (ctx, next) => {
  let item = await Enum.findOne({
    '_id': ObjectId(ctx.request.body._id)
  })
  updateModel(item, ctx.request.body)
  await item.save()
  ctx.body = {
    message: '更新成功!',
    data: item.get()
  }
  next()
}

const deleteById = async (ctx, next) => {
  console.log(ctx.params)
  let item = await Enum.findOne({
    '_id': ObjectId(ctx.params.id)
  })
  await item.remove()
  ctx.body = {
    message: '删除成功!'
  }
  next()
}

module.exports = {
  getByType,
  add,
  update,
  deleteById
}
