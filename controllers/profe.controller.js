//importamos el modelo
const Profe = require('../models/profe.model');

//crear un profe
async function crearProfe(req, res) {
  const { nombre, apellido, materia } = req.body;
  const nuevoProfesor = await Profe.create({ nombre, apellido, materia });

  res.status(201).json({ mensaje: 'Profe creado', profesor: nuevoProfesor });
}

const mostrarProfe = (req, res) => {};
const mostrarProfes = (req, res) => {};
const actualizarProfe = (req, res) => {};
const eliminarProfe = (req, res) => {};

const todasLasFunciones = {
  crearProfe,
  mostrarProfe,
  mostrarProfes,
  actualizarProfe,
  eliminarProfe
};

module.exports = todasLasFunciones;
