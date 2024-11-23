const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: String,
  ano: Number
});

module.exports = mongoose.model('Livro', livroSchema);