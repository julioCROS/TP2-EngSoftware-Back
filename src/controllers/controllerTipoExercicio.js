const mongoose = require('mongoose');
const TipoExercicio = mongoose.model('TipoExercicio');

exports.get = (req, res) => {
  TipoExercicio.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(200).json({
        message: err.message
      })
    });
}

exports.getById = (req, res) => {
  TipoExercicio.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.post = (req, res) => {
  const novoTipoExercicio = new TipoExercicio(req.body)
  novoTipoExercicio.save()
    .then(result => {
      res.status(201).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.put = (req, res) => {
  TipoExercicio.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

exports.delete = (req, res) => {
  TipoExercicio.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      })
    });
}

