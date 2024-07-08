const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
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