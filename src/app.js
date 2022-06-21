const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = express.Router();

//Conexão com o banco de dados (MongoDB)
mongoose.connect(process.env.DB_CONNECTION.toString());

//Carregando models
const Usuario = require('./models/usuario');
const Aluno = require('./models/aluno');
const Empregado = require('./models/empregado');
const CartaoDeCredito = require('./models/cartaoDeCredito');
const Exame = require('./models/exame');
const Treino = require('./models/treino');
const Exercicios = require('./models/exercicios');
const TipoExercicio = require('./models/tipoExercicio');
const Plano = require('./models/plano');
const Ritmo = require('./models/ritmo');
const Natacao = require('./models/natacao');
const Crossfit = require('./models/crossfit');
const Spinning = require('./models/spinning');
const Musculacao = require('./models/musculacao');

//Carregando rotas
const rotaIndex = require('./routes/rotaIndex');
const rotaUsuario = require('./routes/rotaUsuario.js');
const rotaAluno = require('./routes/rotaAluno.js');
const rotaEmpregado = require('./routes/rotaEmpregado.js');
const rotaCartaoDeCredito = require('./routes/rotaCartaoDeCredito.js');
const rotaExame = require('./routes/rotaExame');
const rotaTreino = require('./routes/rotaTreino');
const rotaExercicios = require('./routes/rotaExercicios');
const rotaTipoExercicio = require('./routes/rotaTipoExercicio');
const rotaPlano = require('./routes/rotaPlano');
const rotaRitmo = require('./routes/rotaRitmo');
const rotaNatacao = require('./routes/rotaNatacao');
const rotaCrossfit = require('./routes/rotaCrossfit');
const rotaSpinning = require('./routes/rotaSpinning');
const rotaMusculacao = require('./routes/rotaMusculacao');

// Habilita o CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-access-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Rotas
app.use('/', rotaIndex);
app.use('/usuarios', rotaUsuario);
app.use('/alunos', rotaAluno);
app.use('/empregados', rotaEmpregado);
app.use('/cartoes-de-credito', rotaCartaoDeCredito);
app.use('/exames', rotaExame);
app.use('/treinos', rotaTreino);
app.use('/exercicios', rotaExercicios);
app.use('/tipoexercicio', rotaTipoExercicio);
app.use('/plano', rotaPlano);
app.use('/ritmo', rotaRitmo);
app.use('/natacao', rotaNatacao);
app.use('/crossfit', rotaCrossfit);
app.use('/spinning', rotaSpinning);
app.use('/musculacao', rotaMusculacao);

module.exports = app;