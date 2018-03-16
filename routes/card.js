const router = require('koa-router')()
const cardController = require('../controllers/card')

router.get('/', cardController.getAll)

module.exports = router
