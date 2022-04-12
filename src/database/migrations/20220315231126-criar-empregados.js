'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('empregados', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      emp_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      emp_contato: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      emp_email: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      emp_setor: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('empregados');
  },
};