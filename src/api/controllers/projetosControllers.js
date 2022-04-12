const { update } = require('../models/empregadosModels.js');
const Empregados = require('../models/empregadosModels');
const Projetos = require('../models/projetosModels');

module.exports = {

    async indexAll(req, res) {
        const projetos = await Projetos.findAll({
        })
        return res.json(projetos)
    },

    async index(req, res) {
        const { empregado_id } = req.params
        console.log('Parametro empregado esperado ' + empregado_id)

        const projeto = await Empregados.findByPk(empregado_id, {
            include: { association: 'empregados' }
        })
        return res.json(projeto)

    },

    async store(req, res) {
        const { empregado_id } = req.params
        const { pro_nome, pro_descricao, pro_area,
            pro_setor } = req.body

        console.log('Parametro esperado: ' + empregado_id)
        console.log('Dados: ' + req.body)
        // validar a empresa
        const empregado = await Empregados.findByPk(empregado_id)

        if (!empregado) {
            return res.status(400).json({ error: 'Empregado não encontrado!' })
        }
        const projeto = await Projetos.create({
            pro_nome,
            pro_descricao,
            pro_area,
            pro_setor,
        });

        return res.json(projeto);
    },

    async update(req, res) {
        const { empregado_id } = req.params
        const { pro_nome, pro_descricao, pro_area, pro_setor } = req.body

        await Projetos.update({
            pro_nome, pro_descricao, pro_area, pro_setor
        }, {
            where: { id: empregado_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Funcionário atualizado com sucesso!"
        })
    },

    async delete(req, res) {
        const projeto = await Projetos.findByPk(empregado_id)

        if (!projeto) {
            return res.status(400).json({ error: "Usuário não encontrado!" })
        } else {
            console.log("Funcionário encontrado!")
        }

        await Projetos.destroy({
        }, {
            where: { id: empregado_id }
        });

        return res.status(200).send({
            status: 1,
            message: "Usuário deletado com sucesso!"
        })
    }
};
