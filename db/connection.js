const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.NAMEDB, process.env.USERDB, process.env.PWDDB, {
    host: process.env.SERVERDB,
    dialect: 'mssql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    dialectOptions: {
        encrypt: true
    }
});


module.exports = {
    db
}