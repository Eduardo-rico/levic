//importar lib 3ros
const express = require('express');
const mongoose = require('mongoose');

//mis librerias
const rutasProf = require('./routes/profes.route');

//inicializacion del servidor
const app = express();

mongoose.connect(
  'mongodb+srv://lalo:1234@erico.e2ef3.azure.mongodb.net/levic?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  },
  () => {
    console.log('la base de datos está conectada');
    //escuchamos en un puerto
    app.listen(3100, function () {
      console.log('escuchando en http://localhost:3100');
    });
  }
);

//middleware
app.use(express.json());

//rutas
app.use('/api/profesores', rutasProf);
