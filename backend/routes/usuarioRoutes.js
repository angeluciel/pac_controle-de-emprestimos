const express = require('express');
const { getAllUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario } = require('../controllers/UsuarioController');
const { authenticateJWT } = require('../middlewares/authMiddleware');
const Usuario = require('../models/Usuario')

const router = express.Router();

router.get('/', async (req,res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (e) {
        res.status(500).json({message: 'Erro ao buscar usuários.'});
    }
});

router.get('/', authenticateJWT, getAllUsuarios);
router.get('/:id', authenticateJWT, getUsuarioById);
router.post('/', authenticateJWT, createUsuario);
router.put('/:id', authenticateJWT, updateUsuario);
router.delete('/:id', authenticateJWT, deleteUsuario);
router.post('/usuarios',authenticateJWT, getAllUsuarios )

module.exports = router;