const express = require('express');
const { getAllItems, getItemById, createItem, updateItem, deleteItem } = require('../controllers/ItemController');
const { authenticateJWT } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/', authenticateJWT, getAllItems);
router.get('/:id', authenticateJWT, getItemById);
router.post('/', authenticateJWT, createItem);
router.put('/:id', authenticateJWT, updateItem);
router.delete('/:id', authenticateJWT, deleteItem);

module.exports = router;