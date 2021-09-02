const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Negocios = db.define('negocios', {
  idnegocio: {
    type: DataTypes.STRING(50),
    allowNull: false,
    primaryKey: true
  },
  nombre_comercial: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  nombre_representante_legal: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  sitioweb: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  db,
  tableName: 'negocios',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_negocios",
      unique: true,
      fields: [
        { name: "idnegocio" },
      ]
    },
  ]
});
module.exports = Negocios
