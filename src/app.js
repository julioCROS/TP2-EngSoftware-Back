const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const router = express.Router();
app.use(express.json());

//Conexão com o banco de dados (MongoDB)
mongoose.connect(process.env.DB_CONNECTION.toString());

//Carregando models
const Usuario = require('./models/usuario');/*
const Aluno = require('./models/aluno');
const Empregado = require('./models/empregado');
const CartaoDeCredito = require('./models/cartaoDeCredito');
const Exame = require('./models/exame');
const Treino = require('./models/treino');*/
const Exercicios = require('./models/exercicio');
const TipoExercicio = require('./models/tipoExercicio');
const Plano = require('./models/plano');
const Aula = require('./models/aula');


//Carregando rotas
const rotaIndex = require('./routes/rotaIndex');
const rotaUsuario = require('./routes/rotaUsuario');/*
const rotaAluno = require('./routes/rotaAluno.js');
const rotaEmpregado = require('./routes/rotaEmpregado.js');
const rotaCartaoDeCredito = require('./routes/rotaCartaoDeCredito.js');
const rotaExame = require('./routes/rotaExame');
const rotaTreino = require('./routes/rotaTreino');*/
const rotaExercicio = require('./routes/rotaExercicio');
const rotaTipoExercicio = require('./routes/rotaTipoExercicio');
const rotaPlano = require('./routes/rotaPlano');
const rotaAula = require('./routes/rotaAula');


// Rotas
app.use('/', rotaIndex);
app.use('/usuarios', rotaUsuario);/*
app.use('/alunos', rotaAluno);
app.use('/empregados', rotaEmpregado);
app.use('/cartoes-de-credito', rotaCartaoDeCredito);
app.use('/exames', rotaExame);
app.use('/treinos', rotaTreino);*/
app.use('/exercicios', rotaExercicio);
app.use('/tiposexercicio', rotaTipoExercicio);
app.use('/planos', rotaPlano);
app.use('/aulas', rotaAula);


module.exports = app;