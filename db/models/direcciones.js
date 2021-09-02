const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Direcciones = db.define('direcciones', {
  iddireccion: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true
  },
  direccion: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  idciudad: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'ciudad',
      key: 'idciudad'
    }
  },
  idnegocio: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'negocios',
      key: 'idnegocio'
    }
  },
  latitud: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  longitud: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  telefono1: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
  telefono2: {
    type: DataTypes.STRING(25),
    allowNull: true
  },
}, {
  db,
  tableName: 'direcciones',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_direcciones",
      unique: true,
      fields: [
        { name: "iddireccion" },
      ]
    },
  ]
});
module.exports = Direcciones
