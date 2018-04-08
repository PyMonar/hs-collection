const router = require('koa-router')()
const enumController = require('../controllers/enum')

router.get('/:type', enumController.getByType)
router.post('/add', enumController.add)
router.post('/update', enumController.update)
router.del('/delete/:id', enumController.deleteById)
router.del('/deleteByType/:type', enumController.deleteByType)

module.exports = router
