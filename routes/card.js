const router = require('koa-router')()
const cardController = require('../controllers/card')

router.get('/', cardController.getAll)
router.get('/:id', cardController.get)

module.exports = router
