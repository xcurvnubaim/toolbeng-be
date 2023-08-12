"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "biaya_details",
      [
        {
          order_id: 1,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 2,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 3,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 4,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 5,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 6,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 7,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 8,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 9,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          order_id: 10,
          item: "biaya pengecekan awal",
          price: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("biaya_details", null, {});
  },
};
