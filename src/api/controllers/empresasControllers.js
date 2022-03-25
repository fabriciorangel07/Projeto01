const Empresas = require('../models/empresasModels.js')

module.exports = {
    async indexAll(req, res) {
        const empresas = await Empresas.findAll();
        return res.json(empresas)
    },

    async store(req, res) {
        const {emp_nome, emp_contato, emp_email} = req.body
        const empresa = await Empresas.create({
            emp_nome,
            emp_contato,
            emp_email
        });
        return res.status(200).send({
            status: 1,
            message: 'Empresa cadastrada com sucesso!!!',
            empresa
        })
    }
}

