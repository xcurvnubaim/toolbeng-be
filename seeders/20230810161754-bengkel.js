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
          latitude: 12.3456,
          longitude: -12.2345,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Bengkel B",
          address: "456 Elm St",
          user_id: 12,
          isOpen: false,
          latitude: 12.3456,
          longitude: -12.2346,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Auto Care Center",
          address: "789 Oak Ave",
          user_id: 13,
          isOpen: true,
          latitude: 12.3456,
          longitude: -12.2347,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Quick Fix Garage",
          address: "543 Maple Dr",
          user_id: 14,
          isOpen: false,
          latitude: 12.3456,
          longitude: -12.2348,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Speedy Repairs",
          address: "987 Pine Rd",
          user_id: 15,
          isOpen: true,
          latitude: 12.3456,
          longitude: -12.2349,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Mechanic Masters",
          address: "234 Cedar Ln",
          user_id: 16,
          isOpen: false,
          latitude: 12.3456,
          longitude: -12.235,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Pro Auto Shop",
          address: "567 Walnut St",
          user_id: 17,
          isOpen: true,
          latitude: 12.3456,
          longitude: -12.2351,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Reliable Repairs",
          address: "890 Birch Ave",
          user_id: 18,
          isOpen: false,
          latitude: 12.3456,
          longitude: -12.2352,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Precision Auto Care",
          address: "123 Cherry Dr",
          user_id: 19,
          isOpen: true,
          latitude: 12.3456,
          longitude: -12.2353,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Express Garage",
          address: "456 Pine Rd",
          user_id: 20,
          isOpen: false,
          latitude: 12.3456,
          longitude: -12.2354,
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
