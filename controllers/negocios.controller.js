const { response, request } = require('express');
const { Direcciones, Negocios } = require('../db/models');

const registrarsePost = async (req = request, res = response) => {
    const body = req.body
    const { ubicacion, empresa } = body
    const { id, correo, nombre_comercial, nombre_representante_legal, sitioweb, activo } = empresa
    const { iddireccion, direccion, idciudad, telefono1, telefono2, idnegocio, latitud, longitud } = ubicacion


    try {
        await Negocios.create({
            idnegocio: id,
            nombre_comercial,
            nombre_representante_legal,
            correo,
            sitioweb,
            activo
        })

        await Direcciones.create(
            {
                iddireccion,
                direccion,
                idciudad,
                idnegocio,
                latitud,
                longitud,
                telefono1,
                telefono2

            }
        )
        return res.status(201).json({
            msg: 'Registrado exitósamente!',
            estado: true
        })
    } catch (error) {
        return res.status(500).json({
            msg: 'Hable con administrador',
            estado: false
        })

    }







    /*
    return res.status(201).json(
        body
    )
    */

}

module.exports = {
    registrarsePost
}