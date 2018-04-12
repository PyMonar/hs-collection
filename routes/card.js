const router = require('koa-router')()
const cardController = require('../controllers/card')

router.get('/', cardController.getAll)
router.get('/:id', cardController.get)
router.post('/add', cardController.add)
router.post('/update', cardController.update)
router.del('/delete', cardController.deleteByIds)

module.exports = router
