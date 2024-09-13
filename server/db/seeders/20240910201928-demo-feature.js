'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Features', [{
      name: 'Feature A',
      description: 'First feature',
      project_id: 1,
      sprint_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Features', null, {});
  }
};