const express = require ('express');
const router = express.Router();

const usersControllers = require('../controllers/usersControllers');

router.get('/users', usersControllers.index);

router.post('/users', usersControllers.index);

module.exports = router;