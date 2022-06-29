const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Empregado = new Schema({
  cargo: {
    type: String,
    required: true
  },
  isAdmin: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model('Empregado', Empregado);