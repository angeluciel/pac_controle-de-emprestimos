const express = require('express');
const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/UsuarioController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, getAllUsuarios);
router.get('/:id', authenticateJWT, getUsuarioById);
router.post('/', authenticateJWT, createUsuario);
router.put('/:id', authenticateJWT, updateUsuario);
router.delete('/:id', authenticateJWT, deleteUsuario);
router.post('/usuarios',authenticateJWT, getAllUsuarios )

module.exports = router;