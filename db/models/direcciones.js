const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Direcciones = db.define('direcciones', {
  iddireccion: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
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
  }
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
