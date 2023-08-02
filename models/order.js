'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init({
    user_id: DataTypes.INTEGER,
    bengkel_id: DataTypes.INTEGER,
    location: DataTypes.STRING,
    customer_latitude: DataTypes.FLOAT,
    customer_longitude: DataTypes.FLOAT,
    status: DataTypes.STRING,
    total_amount: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'order',
    paranoid: true,
  });
  return order;
};