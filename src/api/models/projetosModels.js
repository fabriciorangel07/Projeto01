const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs')

class Projetos extends Model {
    static init(sequelize) {
        super.init({
            pro_nome: DataTypes.STRING,
            pro_descricao: DataTypes.STRING,
            pro_area: DataTypes.STRING,
            pro_setor: DataTypes.STRING,
            empregado_id: DataTypes.INTEGER,
        },{
            sequelize,
            tableName: 'projetos',

            hooks: {
                beforeCreate: (projetos) => {
                    console.log("Executando....BeforeCreate")
                },

                afterCreate: (projetos) => {
                    console.log("Executando............ AfterCreate....")
                }
            }
        });
        return this;
    }

    static associate(models) {
        this.belongsTo(models.Empregados, {foreignKey: "empregado_id", as: "empregados"})
    }
}

module.exports = Projetos



