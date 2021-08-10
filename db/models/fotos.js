const { DataTypes } = require('sequelize');
const { db } = require('../connection')

const Fotos = db.define('fotos', {
  idfoto: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  foto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  idmenu: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'menus',
      key: 'idmenu'
    }
  },
  inactivo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  db,
  tableName: 'fotos',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_fotos",
      unique: true,
      fields: [
        { name: "idfoto" },
      ]
    },
  ]
});
module.exports = Fotos
