const express = require('express');
const router = express.Router();
const Livro = require('../models/Livro');

router.post('/', async (req, res) => {
  const livro = new Livro(req.body);
  try {
    const novoLivro = await livro.save();
    res.json(novoLivro);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;