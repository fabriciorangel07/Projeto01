const Empresas = require('../models/empresasModels.js')
const Funcionarios = require('../models/funcionariosModels.js');
//const { index } = require('./indexControllers.js');

module.exports = {

    async indexAll(req, res) {
        const funcionarios = await Funcionarios.findAll()
        return res.json(funcionarios)
    },

    async index(req, res){
        const { empresa_id } = req.params
        console.log('Parametro empresa esperado ' + empresa_id)

        const funcionario = await Empresas.findByPk(empresa_id, {
            include: { association: 'empresa'}
        })

        return res.json(funcionario)

    },

    async store(req, res) {
        const { empresa_id } = req.params
        const { fun_nome, fun_email, fun_password } = req.body

        console.log('Parametro esperado: ' + empresa_id)
        console.log('Dados: ' + req.body)
// validar a empresa
        const empresa = await Empresas.findByPk(empresa_id) 

        if(!empresa) {
            return res.status(400).json({error: 'Empresa não encontrada!'})
        }
        const funcionario = await Funcionarios.create({
            fun_nome,
            fun_email,
            fun_password,
            empresa_id,
        });

        return res.json(funcionario);
    }

};