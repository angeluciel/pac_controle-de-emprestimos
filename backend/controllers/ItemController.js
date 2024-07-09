const Item = require('../models/Item');
const Categoria = require('../models/Categoria');

const getAllItems = async (req, res) => {
  try {
    const itens = await Item.findAll({
    });
    res.json(itens);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar itens.' });
  }
};

const getItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByPk(id, {
      include: Categoria
    });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar item.' });
  }
};

const createItem = async (req, res) => {
  const { nome, id_categoria, descricao, status } = req.body;
  try {
    const newItem = await Item.create({ nome, id_categoria, descricao, status });
    res.json(newItem);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar item.' });
  }
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const { nome, id_categoria, descricao, status } = req.body;
  try {
    const item = await Item.findByPk(id);
    if (item) {
      item.nome = nome;
      item.id_categoria = id_categoria;
      item.descricao = descricao;
      item.status = status;
      await item.save();
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar item.' });
  }
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Item.findByPk(id);
    if (item) {
      await item.destroy();
      res.json({ message: 'Item deletado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Item não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar item.' });
  }
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};