const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

const empregados = require('../api/models/empregadosModels')
const projetos = require('../api/models/projetosModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida!')
}

empregados.init(conexao)
projetos.init(conexao)

empregados.associate(conexao.models)
projetos.associate(conexao.models)

module.exports = conexao;

