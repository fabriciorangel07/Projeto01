const express = require('express')
const router = express.Router();

const projetosControllers = require('../controllers/projetosControllers')

router.get('/projetos', projetosControllers.indexAll)

router.get('/empregados/:empregado_id/projetos', projetosControllers.index)

router.post('/empregados/:empregado_id/projetos', projetosControllers.store)

router.put('/empregados/:empregado_id/projetos', projetosControllers.update)

router.delete('/empregados/:empregado_id/projetos', projetosControllers.delete)

module.exports = router;

