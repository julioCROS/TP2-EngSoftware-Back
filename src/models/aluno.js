const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Aluno = new Schema({
  nome: {
    type: String,
    required: true
  },
  CPF: {
    type: String,
    required: true
  },
  RG: {
    type: String,
    required: true
  },
  dataNasc: [{
    type: Date,
  }],
  cartaoCred: [{
    type: Schema.Types.ObjectId,
    ref: 'CartaoDeCredito',
    required: true
  }],
  planos: [{
    type: Schema.Types.ObjectId,
    ref: 'Plano',
    required: true
  }],
  exames: [{
    type: Schema.Types.ObjectId,
    ref: 'Exame',
    required: true
  }],
});

module.exports = mongoose.model('Aluno', Aluno);