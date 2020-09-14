const express = require('express');
const route = express.Router();

//mis librerias
const {
  crearProfe,
  mostrarProfe,
  mostrarProfes,
  actualizarProfe,
  eliminarProfe
} = require('../controllers/profe.controller');

route
  .get('/', mostrarProfes)
  .post('/', crearProfe)
  .get('/:idProf', mostrarProfe)
  .put('/:idProf', actualizarProfe)
  .delete('/:idProf', eliminarProfe);

module.exports = route;
