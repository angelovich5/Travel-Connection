const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, required: true },
  licencia: { type: String },
  vehiculo: { type: String }
});

module.exports = mongoose.model('User', userSchema);
