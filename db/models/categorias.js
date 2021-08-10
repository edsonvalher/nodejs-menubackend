const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Categorias = db.define('categorias', {
  idcategoria: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  categoria: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  db,
  tableName: 'categorias',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_categorias",
      unique: true,
      fields: [
        { name: "idcategoria" },
      ]
    },
  ]
});
module.exports = Categorias
