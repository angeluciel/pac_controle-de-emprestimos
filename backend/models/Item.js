const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./Categoria');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nome: {
    type: DataTypes.STRING,
    alowNull: false
  },
  id_categoria: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'categorias',
      key: 'id',
    },
  },
  descricao: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('disponivel', 'emprestado', 'indisponivel'),
    defaultValue: 'disponivel',
  },
}, {
  tableName: 'itens',
  timestamps: false,
});

Item.belongsTo(Categoria, { foreignKey: 'id_categoria', as: 'categoria'});
Categoria.hasMany(Item, { foreignKey: 'id_categoria'});

module.exports = Item;