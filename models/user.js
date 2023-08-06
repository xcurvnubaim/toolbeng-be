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
    }
  }
  user.init(
    {
      // username: {
      //   type: DataTypes.STRING(16),
      //   // unique: {
      //   //   args: true,
      //   //   msg: "username already used"
      //   // },
      //   // allowNull: false,
      // },
      phonenumber: {
        type: DataTypes.STRING(15),
        // allowNull: false,
        // unique: {
        //   args: true,
        //   msg: "phone number already used"
        // },
      },
      email: {
        type: DataTypes.STRING,
        // validate :{
        //   isEmail : true
        // },
        // unique: {
        //   args: true,
        //   msg: "email already used"
        // },
        // allowNull: false,
      },
      is_verified : {
        type : DataTypes.BOOLEAN,
        // allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
      role: {
        type: DataTypes.STRING(1),
        // allowNull: false
      },
      fullname: {
        type: DataTypes.STRING,
        // allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
      paranoid: true,
    }
  );
  return user;
};  
