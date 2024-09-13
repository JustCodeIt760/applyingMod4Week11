'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('GanttCharts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sprint_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true, // Enforcing one-to-one relationship
        references: {
          model: 'Sprints',
          key: 'id'
        }
      },
      start_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      end_date: {
        type: Sequelize.DATE,
        allowNull: false
      },
      dependencies: {
        type: Sequelize.TEXT
      },
      progress: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      timestamps: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('GanttCharts');
  }
};