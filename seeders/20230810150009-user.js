"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          fullname: "admin",
          phonenumber: "1230123012",
          email: "super@gmail.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "a",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "John Doe",
          phonenumber: "1234567890",
          email: "john@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Jane Smith",
          phonenumber: "9876543210",
          email: "jane@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Alice Johnson",
          phonenumber: "5551234567",
          email: "alice@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Bob Anderson",
          phonenumber: "7777777777",
          email: "bob@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Emily Williams",
          phonenumber: "8888888888",
          email: "emily@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Michael Brown",
          phonenumber: "9999999999",
          email: "michaelb@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Olivia Johnson",
          phonenumber: "4444444444",
          email: "oliviaJ@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "William Davis",
          phonenumber: "5555555555",
          email: "william@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Sophia Miller",
          phonenumber: "6666666666",
          email: "sophia@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "James Wilson",
          phonenumber: "7777777788",
          email: "james@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Ava Anderson",
          phonenumber: "8888888888",
          email: "ava@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Benjamin Smith",
          phonenumber: "9999999888",
          email: "benjamin@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Isabella Johnson",
          phonenumber: "2222222666",
          email: "isabella@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Liam Taylor",
          phonenumber: "3333333444",
          email: "liam@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Mia Martinez",
          phonenumber: "4444444222",
          email: "mia@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Ethan Garcia",
          phonenumber: "5555555111",
          email: "ethan@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Amelia Rodriguez",
          phonenumber: "6666666888",
          email: "amelia@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Sophia Hernandez",
          phonenumber: "7777777222",
          email: "sophiaH@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Michael Martinez",
          phonenumber: "8888888444",
          email: "michael@example.com",
          is_verified: true,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullname: "Olivia Lopez",
          phonenumber: "9999999222",
          email: "olivia@example.com",
          is_verified: false,
          password:
            "$2b$10$71uvnQ6ARGGw3Y5jwmQa3OBDVHGzxdbBJNO2VCi6Pfx.h/a1XAljO",
          role: "u",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
