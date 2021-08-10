const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Estados = db.define('estados', {
  idestado: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  estado: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  idpais: {
    type: DataTypes.CHAR(2),
    allowNull: false,
    references: {
      model: 'paises',
      key: 'idpais'
    }
  }
}, {
  db,
  tableName: 'estados',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_estados",
      unique: true,
      fields: [
        { name: "idestado" },
      ]
    },
  ]
});
module.exports = Estados
