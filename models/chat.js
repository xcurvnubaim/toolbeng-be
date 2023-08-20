'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  chat.init({
    order_id: DataTypes.INTEGER,
    sendByCust: DataTypes.BOOLEAN,
    message: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'chat',
    timestamps: true,
    updatedAt: false,
    paranoid: true,
  });
  return chat;
};