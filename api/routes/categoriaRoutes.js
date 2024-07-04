const express = require('express');
const { getAllCategorias, getCategoriaById, createCategoria, updateCategoria, deleteCategoria } = require('../controllers/CategoriaController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, getAllCategorias);
router.get('/:id', authenticateJWT, getCategoriaById);
router.post('/', authenticateJWT, createCategoria);
router.put('/:id', authenticateJWT, updateCategoria);
router.delete('/:id', authenticateJWT, deleteCategoria);

module.exports = router;