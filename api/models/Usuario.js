const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  usuario: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  descricao: {
    type: DataTypes.TEXT,
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;