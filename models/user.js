"use strict";

const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.bengkel, {
        foreignKey: "user_id",
      });
    }
  }
  user.init(
    {
      fullname: DataTypes.STRING,
      phonenumber: DataTypes.STRING,
      email: DataTypes.STRING,
      // is_verified : DataTypes.BOOLEAN,
      password: DataTypes.STRING,
      external_type: DataTypes.STRING,
      external_id: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      paranoid: true,
    }
  );
  return user;
};
