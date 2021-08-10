const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Usuariosnegocio = db.define('usuariosnegocio', {
  idusuario: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'usuarios',
      key: 'idusuario'
    }
  },
  idnegocio: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'negocios',
      key: 'idnegocio'
    }
  }
}, {
  db,
  tableName: 'usuariosnegocio',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_usuariosnegocio",
      unique: true,
      fields: [
        { name: "idusuario" },
        { name: "idnegocio" },
      ]
    },
  ]
});
module.exports = Usuariosnegocio
