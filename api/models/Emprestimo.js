const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Emprestimo = sequelize.define('Emprestimo', {
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',
      key: 'id',
    },
  },
  item_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'items',
      key: 'id',
    },
  },
  start_date: {
    type: DataTypes.DATE,
  },
  end_date: {
    type: DataTypes.DATE,
  },
  status: {
    type: DataTypes.ENUM('devolvido', 'a entregar', 'em atraso'),
    defaultValue: 'a entregar',
  },
}, {
  tableName: 'emprestimos',
  timestamps: false,
});

module.exports = Emprestimo;