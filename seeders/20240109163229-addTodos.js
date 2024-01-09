'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Todos', [
      {
        tittle: 'belajar sequelize',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tittle: 'belajar express',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tittle: 'belajar react',
        status: 'active',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
