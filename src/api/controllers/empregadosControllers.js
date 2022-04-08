const Empregados = require('../models/empregadosModels')

module.exports = {
    async indexAll(req, res) {
        const empregados = await Empregados.findAll();
        return res.json(empregados)
    },

    async store(req, res) {
        const { emp_nome, emp_contato, emp_email, emp_setor } = req.body
        const empregados = await Empregados.create({
            emp_nome,
            emp_contato,
            emp_email,
            emp_setor
        });
        return res.status(200).send({
            status: 1,
            message: 'Empregado cadastrado com sucesso!!!',
            empregados
        })
    }
}

