const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Usuario = require('./models/Usuario');
require('dotenv').config();

const categoriaRoutes = require('./routes/categoriaRoutes');
const emprestimoRoutes = require('./routes/emprestimoRoutes');
const itemRoutes = require('./routes/itemRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');

const app = express();
app.use(bodyParser.json());

// Conectar ao banco de dados
sequelize.authenticate().then(() => {
  console.log('Conectado ao banco de dados.');
}).catch((err) => {
  console.error('Erro ao conectar ao banco de dados:', err);
});

// Rotas de autenticação
app.post('/register', async (req, res) => {
  const { usuario, password, descricao } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const newUser = await Usuario.create({ usuario, password: hashedPassword, descricao });
    res.json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar usuário.' });
  }
});

app.post('/login', async (req, res) => {
  const { usuario, password } = req.body;

  try {
    const user = await Usuario.findOne({ where: { usuario } });

    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(401).json({ message: 'Usuário ou senha incorretos.' });
    }

    const token = jwt.sign({ id: user.id, usuario: user.usuario }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao fazer login.' });
  }
});

// Rotas CRUD
app.use('/categorias', categoriaRoutes);
app.use('/emprestimos', emprestimoRoutes);
app.use('/items', itemRoutes);
app.use('/usuarios', usuarioRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});