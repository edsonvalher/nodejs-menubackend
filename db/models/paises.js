const { DataTypes } = require('sequelize');
const { db } = require('../connection')

const Paises = db.define('paises', {
  idpais: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(25),
    allowNull: true
  }
}, {
  db,
  tableName: 'paises',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_paises",
      unique: true,
      fields: [
        { name: "idpais" },
      ]
    },
  ]
})

module.exports = Paises

