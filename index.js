const express = require('express');
const mongoose = require('mongoose');
const livroRoutes = require('./routes/livros');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

require('./config/db');

app.use('/livros', livroRoutes);

app.listen(port, () => {
  console.log(Servidor iniciado na porta ${port});
});