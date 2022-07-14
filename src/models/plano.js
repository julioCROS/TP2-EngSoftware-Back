const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Plano = new Schema({
  nome: {
    type: String,
    required: true
  },
  preco: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  aulas: [{
    type: Schema.Types.ObjectId,
    ref: 'Aula',
    required: true
  }]
});

module.exports = mongoose.model('Plano', Plano);

