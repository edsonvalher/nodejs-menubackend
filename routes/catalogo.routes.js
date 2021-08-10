const { Router } = require('express');
const { paisesGet, estadosGet, ciudadesGet, categoriasGet } = require('../controllers/catalogos.controller');
const router = Router()

router.get('/paises', paisesGet)
router.get('/estados', estadosGet)
router.get('/ciudades', ciudadesGet)
router.get('/categorias', categoriasGet)

module.exports = router;