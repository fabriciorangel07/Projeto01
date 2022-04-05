const { update } = require('../models/empresasModels.js');
const Empresas = require('../models/empresasModels.js')
const Funcionarios = require('../models/funcionariosModels.js');
//const { index } = require('./indexControllers.js');

module.exports = {

    async indexAll(req, res) {
        const funcionarios = await Funcionarios.findAll({
            attributes: {
                exclude: ['fun_senha']
            }
    })
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
        const { fun_nome, fun_email, fun_password, 
                fun_sexo, fun_logado, fun_senha } = req.body

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
            fun_sexo,
            fun_logado,
            fun_senha,
        });

        return res.json(funcionario);
    },

    async update(req, res) {
        const { funcionario_id } = req.params
        const { fun_nome, fun_email, fun_password, fun_sexo } = req.body

        await Funcionarios.update({
            fun_nome, fun_email, fun_password, fun_sexo 
        }, {
            where: { id: funcionario_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Funcionário atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const funcionario = await Funcionarios.findByPk(funcionario_id)
        
        if (!funcionario) {
            return res.status(400).json({error: "Usuário não encontrado!"})
        } else {
            console.log ("Funcionário encontrado!")
        }

        await Funcionarios.destroy({ 
        }, {
            where: { id: funcionario_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário deletado com sucesso!"})
    }
};
