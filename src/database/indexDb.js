const Sequelize = require('sequelize')
const dbConfig = require('../config/database.js')

const conexao = new Sequelize(dbConfig)

const empresas = require('../api/models/empresasModels.js')
const funcionarios = require('../api/models/funcionariosModels')

try{
    conexao.authenticate();
    console.log('Conexão estabelecida!')
} catch (error) {
    console.log('Conexão não estabelecida!')
}

empresas.init(conexao)
funcionarios.init(conexao)

empresas.associate(conexao.models)
funcionarios.associate(conexao.models)

module.exports = conexao;

