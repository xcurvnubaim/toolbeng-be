'use strict';
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // username: {
      //   type: Sequelize.STRING(20),
      //   allowNull : false,
      //   unique : true
      // },
      phonenumber: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique : true
      },
      email : {
        type:Sequelize.STRING,
        allowNull: false,
        unique : true
      },
      is_verified : {
        type : Sequelize.BOOLEAN,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      role: {
        type: Sequelize.STRING(1),
        allowNull: false
      },
      fullname: {
        type : Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt:{
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};