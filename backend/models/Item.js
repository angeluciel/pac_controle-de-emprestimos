const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

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

module.exports = Item;