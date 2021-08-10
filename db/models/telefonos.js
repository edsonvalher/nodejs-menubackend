const { DataTypes } = require('sequelize');
const { db } = require('../connection')

const Telefonos = db.define('telefonos', {
  idtelefono: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'direcciones',
      key: 'iddireccion'
    }
  },
  numero: {
    type: DataTypes.STRING(25),
    allowNull: false
  },
  iddireccion: {
    type: DataTypes.BIGINT,
    allowNull: false
  }
}, {
  db,
  tableName: 'telefonos',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_telefonos",
      unique: true,
      fields: [
        { name: "idtelefono" },
      ]
    },
  ]
});
module.exports = Telefonos
