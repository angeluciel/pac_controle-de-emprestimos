const Emprestimo = require('../models/Emprestimo');
const Usuario = require('../models/Usuario');
const Item = require('../models/Item');

const getAllEmprestimos = async (req, res) => {
  try {
    const emprestimos = await Emprestimo.findAll({
      include: [Usuario, Item]
    });
    res.json(emprestimos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar empréstimos.' });
  }
};

const getEmprestimoById = async (req, res) => {
  const { id } = req.params;
  try {
    const emprestimo = await Emprestimo.findByPk(id, {
      include: [Usuario, Item]
    });
    if (emprestimo) {
      res.json(emprestimo);
    } else {
      res.status(404).json({ message: 'Empréstimo não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar empréstimo.' });
  }
};

const createEmprestimo = async (req, res) => {
  const { user_id, item_id, start_date, end_date, status } = req.body;
  try {
    const newEmprestimo = await Emprestimo.create({ user_id, item_id, start_date, end_date, status });
    res.json(newEmprestimo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar empréstimo.' });
  }
};

const updateEmprestimo = async (req, res) => {
  const { id } = req.params;
  const { user_id, item_id, start_date, end_date, status } = req.body;
  try {
    const emprestimo = await Emprestimo.findByPk(id);
    if (emprestimo) {
      emprestimo.user_id = user_id;
      emprestimo.item_id = item_id;
      emprestimo.start_date = start_date;
      emprestimo.end_date = end_date;
      emprestimo.status = status;
      await emprestimo.save();
      res.json(emprestimo);
    } else {
      res.status(404).json({ message: 'Empréstimo não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar empréstimo.' });
  }
};

const deleteEmprestimo = async (req, res) => {
  const { id } = req.params;
  try {
    const emprestimo = await Emprestimo.findByPk(id);
    if (emprestimo) {
      await emprestimo.destroy();
      res.json({ message: 'Empréstimo deletado com sucesso.' });
    } else {
      res.status(404).json({ message: 'Empréstimo não encontrado.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao deletar empréstimo.' });
  }
};

module.exports = {
  getAllEmprestimos,
  getEmprestimoById,
  createEmprestimo,
  updateEmprestimo,
  deleteEmprestimo
};
