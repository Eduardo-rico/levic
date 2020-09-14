const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profeSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  apellido: {
    type: String
  },
  estudiantes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Estudiante'
    }
  ],
  materia: {
    type: String,
    required: true,
    trim: true
  }
});
module.exports = mongoose.model('Profe', profeSchema);
