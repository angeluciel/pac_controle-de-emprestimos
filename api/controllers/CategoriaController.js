const Categoria = require('../models/Categoria');

const getAllCategorias = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categorias.' });
  }
};

const getCategoriaById = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar categoria.' });
  }
};

const createCategoria = async (req, res) => {
  const { nome, descricao } = req.body;
  try {
    const newCategoria = await Categoria.create({ nome, descricao });
    res.json(newCategoria);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar categoria.' });
  }
};

const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao } = req.body;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      categoria.nome = nome;
      categoria.descricao = descricao;
      await categoria.save();
      res.json(categoria);
    } else {
      res.status(404).json({ message: 'Categoria não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar categoria.' });
  }
};

const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    const categoria = await Categoria.findByPk(id);
    if (categoria) {
      await categoria.destroy();
      res.json({ message: 'Categoria deletada com sucesso.' });
    } else {
      res.status(404).json({ message: 'Categoria não encontrada.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar categoria.' });
  }
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria
};