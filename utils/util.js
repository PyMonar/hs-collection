/**
 * 更新Model
 * @param {*} model 数据库Model
 * @param {*} obj 表单数据对象
 */
const updateModel = (model, obj) => {
  Object.keys(obj).forEach(key => {
    // _id 无需更新
    if (key === '_id') return
    model.set(key, obj[key])
  })
}

module.exports = {
  updateModel
}
