'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class biaya_detail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  biaya_detail.init({
    order_id: DataTypes.INTEGER,
    item: DataTypes.STRING,
    price: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'biaya_detail',
    paranoid: true
  });
  return biaya_detail;
};