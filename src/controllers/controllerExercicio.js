const mongoose = require('mongoose');
const Exercicio = mongoose.model('Exercicio');

exports.get = (req, res) => {
  Exercicio.find()
    .populate('tipoExercicio')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.getById = (req, res) => {
  Exercicio.findById(req.params.id)
    .populate('tipoExercicio')
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    })
}

exports.post = (req, res) => {
  const novoExercicio = new Exercicio(req.body);
  novoExercicio.save()
    .then(result => {
      res.status(201).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.put = (req, res) => {
  Exercicio.findByIdAndUpdate(req.params.id, req.body)
    .then(result =>{
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = (req, res) => {
  Exercicio.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result)
    }).catch(err =>{
      res.status(500).sen
    });
}