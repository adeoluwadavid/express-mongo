const express = require('express')
const router = express.Router()
const sampleController = require('../controller/sampleController')

router.get('/get', sampleController.get)
router.post('/post', sampleController.post)
router.get('/getAll', sampleController.getAll)
router.delete('/delete/:id', sampleController.deleteById)
router.put('/update/:id', sampleController.updateById)

module.exports = router