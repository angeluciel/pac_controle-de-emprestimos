const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuários.' });
  }
};

const getUsuarioById = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Usuario.findByPk(id);
    if (usuario) {
      res.json(usuario);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário.' });
  }
};

const createUsuario = async (req, res) => {
  const { usuario, password, descricao } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await Usuario.create({ usuario, password: hashedPassword, descricao });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar usuário.' });
  }
};

const updateUsuario = async (req, res) => {
  const { id } = req.params;
  const { usuario, password, descricao } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = await Usuario.findByPk(id);
    if (user) {
      user.usuario = usuario;
      user.password = hashedPassword;
      user.descricao = descricao;
      await user.save();
      res.json(user);
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar usuário.' });
  }
};

const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Usuario.findByPk(id);
    if (user) {
      await user.destroy();
      res.json({ message: 'Usuário deletado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Usuário não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar usuário.' });
  }
};

module.exports = {
  getAllUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario
};