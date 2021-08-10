var DataTypes = require("sequelize").DataTypes;
var _menus = require("./menus");

function initModels(sequelize) {
  var menus = _menus(sequelize, DataTypes);

  menus.belongsTo(categorias, { as: "idcategoria_categoria", foreignKey: "idcategoria"});
  categorias.hasMany(menus, { as: "menus", foreignKey: "idcategoria"});
  menus.belongsTo(direcciones, { as: "iddireccion_direccione", foreignKey: "iddireccion"});
  direcciones.hasMany(menus, { as: "menus", foreignKey: "iddireccion"});

  return {
    menus,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
