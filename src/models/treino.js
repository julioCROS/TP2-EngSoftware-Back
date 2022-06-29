const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Treino = new Schema({
  CPFTreino: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  exames: [{
    type: Schema.Types.ObjectId,
    ref: 'Exame',
    required: true
  }],
});

module.exports = mongoose.model('Treino', Treino);