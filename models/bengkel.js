'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bengkel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.user, { foreignKey: "user_id"});
    }
  }
  bengkel.init({
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    isOpen: DataTypes.BOOLEAN,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'bengkel',
    paranoid: true,
  });
  return bengkel;
};