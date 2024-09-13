'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FeaturePhases', {
      feature_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Features',
          key: 'id'
        }
      },
      phase_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Phases',
          key: 'id'
        }
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
    await queryInterface.dropTable('FeaturePhases');
  }
};