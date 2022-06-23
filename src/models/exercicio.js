const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Exercicios = new Schema({
  repeticoes: {
    type: Number,
    required: true,
  },
  series: {
    type: Number,
    required: true,
  },
  tipoExercicio: {
    type: Schema.Types.ObjectId,
    ref: 'TipoExercicio',
    required: true,
  }
});

module.exports = mongoose.model('Exercicio', Exercicios)