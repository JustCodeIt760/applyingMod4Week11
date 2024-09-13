'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Phases', [{
      name: 'Phase 1',
      start_date: new Date(),
      end_date: new Date(new Date().setDate(new Date().getDate() + 3)),
      description: 'Initial phase',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Phases', null, {});
  }
};