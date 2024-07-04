const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Item = sequelize.define('Item', {
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
    type: DataTypes.ENUM('disponível', 'emprestado', 'indisponível'),
    defaultValue: 'disponível',
  },
}, {
  tableName: 'items',
  timestamps: false,
});

module.exports = Item;