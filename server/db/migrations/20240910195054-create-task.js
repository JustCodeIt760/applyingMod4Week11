'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      phase_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Phases',
          key: 'id'
        }
      },
      parent_task_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tasks',
          key: 'id'
        }
      },
      dependencies: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING(50),
        defaultValue: 'Backlog'
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
    await queryInterface.dropTable('Tasks');
  }
};