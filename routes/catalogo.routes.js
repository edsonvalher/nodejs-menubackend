const { Router } = require('express');
const { paisesGet, estadosGet, ciudadesGet, categoriasGet } = require('../controllers/catalogos.controller');
const router = Router()

router.get('/paises', paisesGet)
router.get('/estados/:pais', estadosGet)
router.get('/ciudades/:estado', ciudadesGet)
router.get('/categorias', categoriasGet)

module.exports = router;