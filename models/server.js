//npx sequelize-auto -h 'SQL5102.site4now.net' -d 'db_a78472_menudb'  -u 'db_a78472_menudb_admin' -x 'menuDb2021' -p 1433  --dialect 'mssql' -o './db/models' -t 'paises'
const express = require('express')
const cors = require('cors')

const { db } = require('../db/connection')

const rutaCatalogo = require('../routes/catalogo.routes')
const rutaNegocio = require('../routes/negocios.routes')

class Server {

    constructor() {
        this.app = express();
        this.puerto = process.env.PORT || 1512
        this.rutas = {
            catalogos: '/catalogos',
            negocios: '/negocios'
        }

        //abrir conexión db
        this.dbConnection();
        //middlewares
        this.middlewares()
        //rutas de mi aplicacion
        this.routes();

    }
    middlewares() {
        //configuracion de CORS
        this.app.use(cors())
        //directorio publico
        this.app.use(express.static('public'))
        this.app.use(express.json())

    }

    routes() {
        const { catalogos, negocios } = this.rutas
        this.app.use(catalogos, rutaCatalogo);
        this.app.use(negocios, rutaNegocio);


    }
    listen() {

        this.app.listen(
            this.puerto, () => {
                console.log('Servidor corriendo en puerto', this.puerto)
            }
        )
    }
    dbConnection = async () => {
        try {
            await db.authenticate();
            console.log("base de datos en linea")
        } catch (error) {
            console.log('error al conectar en base de datos')

        }

    }

}

module.exports = Server