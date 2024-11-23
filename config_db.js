const mongoose = require('mongoose');

const dbURI = 'mongodb://localhost/biblioteca_virtual';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error(err));