const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartaoCredito = new Schema({
  nome: {
    type: String,
    required: true
  },
  numeroCartao: {
    type: Number,
    required: true
  },
  CVV: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('CartaoCredito', CartaoCredito);