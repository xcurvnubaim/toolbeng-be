"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id"
        }
      },
      bengkel_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "bengkels",
          key: "id"
        }
      },
      location: {
        type: Sequelize.STRING,
      },
      customer_latitude: {
        type: Sequelize.FLOAT,
      },
      customer_longitude: {
        type: Sequelize.FLOAT,
      },
      status: {
        type: Sequelize.STRING,
      },
      total_amount: {
        type: Sequelize.BIGINT,
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
    await queryInterface.dropTable("orders");
  },
};
