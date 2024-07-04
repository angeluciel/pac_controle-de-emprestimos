const express = require('express');
const { getAllEmprestimos, getEmprestimoById, createEmprestimo, updateEmprestimo, deleteEmprestimo } = require('../controllers/EmprestimoController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, getAllEmprestimos);
router.get('/:id', authenticateJWT, getEmprestimoById);
router.post('/', authenticateJWT, createEmprestimo);
router.put('/:id', authenticateJWT, updateEmprestimo);
router.delete('/:id', authenticateJWT, deleteEmprestimo);

module.exports = router;