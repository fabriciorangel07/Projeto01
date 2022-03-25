const Users = require('../models/usersModels.js');

module.exports = {
    async index (req, res) {
        const users = await Users.findAll();
        return res.json(users)
    },

    async store (req, res) {
        const {usr_name, usr_email, usr_password} = req.body;
        const users = await Users.create ({usr_name, usr_email, usr_password});
        return res.status(200).send({
            status: 1,
            message: "Usuário cadastrado com sucesso!",
            users
        })
    },
}