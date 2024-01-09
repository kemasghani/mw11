const express = require('express')
const router = express.Router();
const todosController = require('../controllers/todosController')

router.get('/', todosController.getAll)
router.get('/:id', todosController.getById)
router.post('/', todosController.create)
router.delete('/:id', todosController.delete)

module.exports = router