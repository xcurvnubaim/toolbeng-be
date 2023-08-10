"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "bengkels",
      [
        {
          name: "Bengkel A",
          address: "123 Main St",
          user_id: 11,
          isOpen: true,
          lattitude: 12.3456,
          longitude: -456.789,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bengkel B",
          address: "456 Elm St",
          user_id: 12,
          isOpen: false,
          lattitude: 345.678,
          longitude: -678.901,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Auto Care Center",
          address: "789 Oak Ave",
          user_id: 13,
          isOpen: true,
          lattitude: 567.89,
          longitude: -890.123,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quick Fix Garage",
          address: "543 Maple Dr",
          user_id: 14,
          isOpen: false,
          lattitude: 789.012,
          longitude: -123.456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Speedy Repairs",
          address: "987 Pine Rd",
          user_id: 15,
          isOpen: true,
          lattitude: 901.234,
          longitude: -234.567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mechanic Masters",
          address: "234 Cedar Ln",
          user_id: 16,
          isOpen: false,
          lattitude: 12.3456,
          longitude: -456.789,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pro Auto Shop",
          address: "567 Walnut St",
          user_id: 17,
          isOpen: true,
          lattitude: 345.678,
          longitude: -678.901,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reliable Repairs",
          address: "890 Birch Ave",
          user_id: 18,
          isOpen: false,
          lattitude: 567.89,
          longitude: -890.123,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Precision Auto Care",
          address: "123 Cherry Dr",
          user_id: 19,
          isOpen: true,
          lattitude: 789.012,
          longitude: -123.456,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Express Garage",
          address: "456 Pine Rd",
          user_id: 20,
          isOpen: false,
          lattitude: 901.234,
          longitude: -234.567,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("bengkels", null, {});
  },
};
