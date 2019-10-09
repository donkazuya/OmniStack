const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-wmkcv.mongodb.net:27017,omnistack-shard-00-01-wmkcv.mongodb.net:27017,omnistack-shard-00-02-wmkcv.mongodb.net:27017/semana09?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//GET, POST, PUT, DELETE

//req.query = Acessar Query params(para Filtros)
//req.params = Acessar Route params (para edição, Delete)
//req.body = Acessar corpo da requisição

app.use(cors());
app.use(express.json()); 
app.use('/files', express.static(path.resolve(__dirname, '../uploads')));
app.use(routes);

app.listen(3333);


