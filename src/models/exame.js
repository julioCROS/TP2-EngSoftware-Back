const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exame = new Schema({
  CPFAluno: {
    type: Number,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  peso: {
    type: Number,
    required: true
  },
  altura: [{
    type: Number,
    required: true
  }],
  pressaoArt: [{
    type: Number,
    required: true
  }],
  gorduraCorp: [{
    type: Number,
    required: true
  }],
  massMagra: [{
    type: Number,
    required: true
  }],
  IMC: [{
    type: Number,
    required: true
  }],
  estaApto: [{
    type: Boolean,
    required: true,
  }],
});

module.exports = mongoose.model('Exame', Exame);