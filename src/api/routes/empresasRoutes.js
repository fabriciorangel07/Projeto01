const express = require('express')
const router = express.Router();

const empresasControllers = require('../controllers/empresasControllers.js')

router.get('/empresas', empresasControllers.indexAll)

router.post('/empresas', empresasControllers.store)


module.exports = router
