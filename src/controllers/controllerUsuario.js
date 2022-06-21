const dotenv = require('dotenv');
dotenv.config();

exports.get = (req, res, next) => {
  Usuario.find()
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    }
    );
}

exports.getById = (req, res, next) => {
  Usuario.findById(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    })
}


exports.post = (req, res, next) => {
  const usuario = new Usuario({
    email: req.body.email,
    senha: req.body.senha
  });
  usuario.save()
    .then(result => {
      res.status(201).json({
        message: 'Usuário criado com sucesso',
        usuarioCriado: result
      });
    }).catch(err => {
      if (err.code === 11000) {
        res.status(409).json({
          message: 'Email já existe'
        });
      } else {
        res.status(500).json({
          message: err.message
        });
      }
    }
    );
}

exports.put = (req, res, next) => {
  Usuario.findByIdAndUpdate(req.params.id, {
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

exports.delete = (req, res, next) => {
  Usuario.findByIdAndRemove(req.params.id)
    .then(result => {
      res.status(200).json(result);
    }).catch(err => {
      res.status(500).json({
        message: err.message
      });
    });
}

