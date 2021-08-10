const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Ciudad = db.define('ciudad', {
  idciudad: {
    autoIncrement: true,
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  ciudad: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  idestado: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'estados',
      key: 'idestado'
    }
  }
}, {
  db,
  tableName: 'ciudad',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_ciudad",
      unique: true,
      fields: [
        { name: "idciudad" },
      ]
    },
  ]
});
module.exports = Ciudad
