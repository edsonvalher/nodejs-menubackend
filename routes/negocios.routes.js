const { Router } = require('express');
const { registrarsePost } = require('../controllers/negocios.controller');
const router = Router()

router.post('/registrar', registrarsePost)

module.exports = router;