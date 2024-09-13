'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Leads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      last_name: {
        type: Sequelize.STRING(20),
        allowNull: false
      },
      date_of_birth: {
        type: Sequelize.DATE
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
      description: {
        type: Sequelize.TEXT
      },
      date_added: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      phone_number: {
        type: Sequelize.STRING(20)
      },
      email: {
        type: Sequelize.STRING(254),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      converted_date: {
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
    await queryInterface.dropTable('Leads');
  }
};