const { DataTypes } = require('sequelize');
const { db } = require('../connection')
const Menus = db.define('menus', {
  idmenu: {
    autoIncrement: true,
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  iddireccion: {
    type: DataTypes.BIGINT,
    allowNull: false,
    references: {
      model: 'direcciones',
      key: 'iddireccion'
    }
  },
  titulo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  contenido: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  precio: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false
  },
  idcategoria: {
    type: DataTypes.BIGINT,
    allowNull: true,
    references: {
      model: 'categorias',
      key: 'idcategoria'
    }
  },
  inactivo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  db,
  tableName: 'menus',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_menus",
      unique: true,
      fields: [
        { name: "idmenu" },
      ]
    },
  ]
});
module.exports = Menus
