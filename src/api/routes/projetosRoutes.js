const express = require('express')
const router = express.Router();

const projetosControllers = require('../controllers/projetosControllers')

router.get('/projetos', projetosControllers.indexAll)

router.post('/empregados/:empresa_id/projetos', projetosControllers.store)

router.get('/empregados/:empresa_id/projetos', projetosControllers.index)

router.put('/empregados/:empresa_id/projetos', projetosControllers.update)

router.delete('/empregados/:empresa_id/projetos', projetosControllers.delete)

module.exports = router

