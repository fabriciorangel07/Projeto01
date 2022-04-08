const express = require('express')
const router = express.Router();

const empregadosControllers = require('../controllers/empregadosControllers.js')

router.get('/empregados', empregadosControllers.indexAll)

router.post('/empregados', empregadosControllers.store)

module.exports = router
