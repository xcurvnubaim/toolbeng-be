"use strict";
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      phonenumber: {
        type: Sequelize.STRING(15),
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
      },
      // is_verified : {
      //   type : Sequelize.BOOLEAN,
      //   allowNull: false
      // },
      password: {
        type: Sequelize.STRING,
        // allowNull : false
      },
      role: {
        type: Sequelize.STRING(1),
        allowNull: false,
      },
      fullname: {
        type: Sequelize.STRING,
      },
      external_type: {
        type: Sequelize.STRING,
      },
      external_id: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("users");
  },
};
