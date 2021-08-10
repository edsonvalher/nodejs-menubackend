const { DataTypes } = require('sequelize');
const { db } = require('../connection')

const Usuarios = db.define('usuarios', {
  idusuario: {
    type: DataTypes.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  usuario: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  contrasena: {
    type: DataTypes.BLOB,
    allowNull: false
  },
  foto: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  activo: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  individual: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  db,
  tableName: 'usuarios',
  schema: 'dbo',
  timestamps: false,
  indexes: [
    {
      name: "PK_usuarios",
      unique: true,
      fields: [
        { name: "idusuario" },
      ]
    },
  ]
});
module.exports = Usuarios
