const { response, request } = require('express');
const { Paises, Estados, Ciudad, Categorias } = require('../db/models');



const paisesGet = async (req = request, res = response) => {
    const data = await Paises.findAll()
    res.status(200).json(
        {
            data
        }
    )
}

const estadosGet = async (req = request, res = response) => {
    const { pais } = req.params
    const data = await Estados.findAll({ where: { idpais: pais } })
    res.status(200).json(
        {
            data
        }
    )
}

const ciudadesGet = async (req = request, res = response) => {
    const { estado } = req.params
    const data = await Ciudad.findAll({ where: { idestado: estado } })
    res.status(200).json(
        {
            data
        }
    )
}

const categoriasGet = async (req = request, res = response) => {
    const data = await Categorias.findAll()
    res.status(200).json(
        {
            data
        }
    )
}

module.exports = {
    paisesGet,
    estadosGet,
    ciudadesGet,
    categoriasGet
}