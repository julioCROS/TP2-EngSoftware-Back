const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');

exports.get = async (req, res) => {
   await Usuario.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.getById = async (req, res) => {
  await Usuario.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}


exports.post = async (req, res) => {
  const novoUsuario = new Usuario(req.body);
  await novoUsuario.save(req.body)
    .then(result => {
      res.status(201).json({
        message: 'Usuário criado com sucesso',
        usuarioCriado: result
      });
    }).catch(err => {
      if (err.code === 11000) {
        res.status(409).json({
          message: 'Email já existente'
        });
      } else {
        res.status(500).json({
          message: err.message
        });
      }
    });
}

exports.put = async (req, res) => {
  await Usuario.findByIdAndUpdate(req.params.id, req.body)
    .then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).json({
      message: err.message
    });
  });
}

exports.delete = async (req, res) => {
  await Usuario.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(req.body);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

