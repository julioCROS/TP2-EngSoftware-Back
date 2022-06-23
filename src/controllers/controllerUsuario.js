const mongoose = require('mongoose');
const Usuario = mongoose.model('Usuario');
const dotenv = require('dotenv');
dotenv.config();

exports.get = async(req, res, next) => {
  await Usuario.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

exports.getById = async(req, res, next) => {
  await Usuario.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}


exports.post = async(req, res, next) => {
  console.log(req.body);
  await Usuario.create(req.body)
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

exports.put = async(req, res, next) => {
  await Usuario.findByIdAndUpdate(req.params.id, {
    email: req.body.email,
    senha: req.body.senha
  }).then(result => {
    res.status(200).json(result);
  }).catch(err => {
    res.status(500).json({
      message: err.message
    });
  });
}

exports.delete = async(req, res, next) => {
  await Usuario.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

