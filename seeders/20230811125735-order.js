"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          user_id: 2,
          bengkel_id: 1,
          location: "Main St Workshop",
          customer_latitude: -6.9667,
          customer_longitude: 110.4167,
          category: true,
          tipe_kendaraan: "Sedan",
          nomor_polisi: "ABC123",
          kondisi: "Engine Issue",
          keterangan: "Needs oil change and tune-up",
          ban_bocor: false,
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          bengkel_id: 2,
          location: "Quick Fix Garage",
          customer_latitude: -2.9861,
          customer_longitude: 104.7556,
          category: false,
          tipe_kendaraan: "Truck",
          nomor_polisi: "XYZ789",
          kondisi: "Transmission Problem",
          keterangan: "Requires transmission fluid change and adjustment",
          ban_bocor: true,
          status: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 3,
          bengkel_id: 1,
          location: "Speedy Repairs",
          customer_latitude: -5.1619,
          customer_longitude: 119.4362,
          category: true,
          tipe_kendaraan: "Sedan",
          nomor_polisi: "VWX876",
          kondisi: "AC Not Cooling",
          keterangan: "Air kondisiing system needs recharge",
          ban_bocor: false,
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          bengkel_id: 4,
          location: "Auto Care Center",
          customer_latitude: -6.5333,
          customer_longitude: 110.6667,
          category: true,
          tipe_kendaraan: "SUV",
          nomor_polisi: "DEF456",
          kondisi: "Flat Tire",
          keterangan: "Front tire needs replacement",
          ban_bocor: true,
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          bengkel_id: 7,
          location: "Mechanic Masters",
          customer_latitude: -6.84,
          customer_longitude: 107.9208,
          category: true,
          tipe_kendaraan: "Motorcycle",
          nomor_polisi: "PQR765",
          kondisi: "Engine Overheating",
          keterangan: "Coolant levels need to be checked and refilled",
          ban_bocor: true,
          status: "Completed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 4,
          bengkel_id: 5,
          location: "Bengkel XYZ",
          customer_latitude: 1.0833,
          customer_longitude: 104.0333,
          category: false,
          tipe_kendaraan: "Motorcycle",
          nomor_polisi: "YZA234",
          kondisi: "Chain Adjustment",
          keterangan: "Motorcycle chain needs adjustment",
          ban_bocor: true,
          status: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          bengkel_id: 6,
          location: "Reliable Repairs",
          customer_latitude: -7.7167,
          customer_longitude: 109.017,
          category: false,
          tipe_kendaraan: "Motorcycle",
          nomor_polisi: "GHI987",
          kondisi: "Battery Dead",
          keterangan: "Needs new battery",
          ban_bocor: false,
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 5,
          bengkel_id: 3,
          location: "Precision Auto Care",
          customer_latitude: -5.45,
          customer_longitude: 105.2667,
          category: false,
          tipe_kendaraan: "SUV",
          nomor_polisi: "STU543",
          kondisi: "Exhaust Noise",
          keterangan: "Exhaust pipe has a leak",
          ban_bocor: false,
          status: "Cancelled",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 6,
          bengkel_id: 2,
          location: "Express Garage",
          customer_latitude: -6.5966,
          customer_longitude: 106.7972,
          category: true,
          tipe_kendaraan: "Sedan",
          nomor_polisi: "JKL654",
          kondisi: "Brake Issue",
          keterangan: "Brake pads need replacement",
          ban_bocor: false,
          status: "Pending",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_id: 7,
          bengkel_id: 1,
          location: "Pro Auto Shop",
          customer_latitude: -6.2889,
          customer_longitude: 106.7181,
          category: false,
          tipe_kendaraan: "Truck",
          nomor_polisi: "MNO321",
          kondisi: "Electrical Problem",
          keterangan: "Faulty wiring causing electrical issues",
          ban_bocor: true,
          status: "In Progress",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
