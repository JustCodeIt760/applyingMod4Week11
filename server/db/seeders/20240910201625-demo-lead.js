'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Leads', [{
      first_name: 'pep',
      last_name: 'valdes',
      date_of_birth: '1960-04-12',
      user_id: 1,
      category_id: 3, // Assuming 'converted' category has ID 3
      description: 'PCA',
      date_added: new Date(),
      phone_number: '123-456-7890',
      email: 'pep.valdes@example.com',
      converted_date: new Date(),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Leads', null, {});
  }
};
