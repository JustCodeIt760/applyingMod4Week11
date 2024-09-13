'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('GanttCharts', [{
      sprint_id: 1,
      start_date: new Date(),
      end_date: new Date(new Date().setDate(new Date().getDate() + 7)),
      dependencies: null,
      progress: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('GanttCharts', null, {});
  }
};