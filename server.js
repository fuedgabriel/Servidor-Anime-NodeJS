const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requiredir = require('require-dir');


//Iniciando API
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando DB

mongoose.connect('mongodb+srv://adm:adm@sp-tqgpa.gcp.mongodb.net/test?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true })


requiredir('./Src/Models');
app.use('/api', require('./Src/routes'))

app.listen(7844);