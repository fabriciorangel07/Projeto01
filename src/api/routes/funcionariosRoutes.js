const express = require('express')
const router = express.Router();

const funcionariosControllers = require('../controllers/funcionariosControllers.js')

router.get('/funcionarios', funcionariosControllers.indexAll)

router.post('/empresas/:empresa_id/funcionarios', funcionariosControllers.store)

router.get('/empresas/:empresa_id/funcionarios', funcionariosControllers.index)

router.put('/empresas/:funcionario_id/funcionarios', funcionariosControllers.update)

module.exports = router

