'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      { name: 'uncontacted', createdAt: new Date(), updatedAt: new Date() },
      { name: 'contacted', createdAt: new Date(), updatedAt: new Date() },
      { name: 'converted', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};