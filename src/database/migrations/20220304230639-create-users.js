'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable ('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      usr_name: {
        allowNull: false,
        type: Sequelize.STRING (50),
      },
      usr_email: {
        allowNull: false,
        type: Sequelize.STRING (100),
      },
      usr_password: {
        allowNull: false,
        type: Sequelize.STRING (20),
      },
      create_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      update_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
