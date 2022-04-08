'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('projetos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      empregado_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'empregados', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },

      pro_nome: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },

      pro_descricao: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      pro_area: {
        type: Sequelize.STRING(10),
        allowNull: false,
      },

      pro_setor: {
        type: Sequelize.STRING(80),
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
    return await queryInterface.dropTable('projetos');
  }
};
