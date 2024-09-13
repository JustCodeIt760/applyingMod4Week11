'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Followups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      lead_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_added: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW // Set default value to current timestamp
      },
      notes: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      file: {
        type: Sequelize.STRING,
        allowNull: true
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
    await queryInterface.dropTable('Followups');
  }
};