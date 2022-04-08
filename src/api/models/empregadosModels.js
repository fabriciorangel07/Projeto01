const { Model, DataTypes } = require('sequelize')

class Empregados extends Model {
    static init(sequelize) {
        super.init({
            emp_nome: DataTypes.STRING,
            emp_contato: DataTypes.STRING,
            emp_email: DataTypes.STRING,
            emp_setor: DataTypes.STRING,
        },{
            sequelize,
            tableName: 'empregados',
        });
        return this;
    }

    static associate(models) {
        this.hasMany(models.Projetos, {foreignKey: "empregado_id", as: 'empregados' })
    }
}
 
module.exports = Empregados
