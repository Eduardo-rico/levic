const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estudianteSchema = new Schema({
  nombre: {
    type: String
  },
  apellido: String
});

module.exports = mongoose.model('Estudiante', estudianteSchema);
