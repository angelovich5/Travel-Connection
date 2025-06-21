const User = require('../models/user');

const registerUser = async (req, res) => {
  const { nombre, email, password, role, licencia, vehiculo } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'El usuario ya existe' });

    const roles = role === 'conductor' ? ['conductor', 'pasajero'] : [role];

    const newUser = new User({
      nombre,
      email,
      password,
      roles,
      licencia: role === 'conductor' ? licencia : null,
      vehiculo: role === 'conductor' ? vehiculo : null
    });

    await newUser.save();
    res.status(201).json({ message: 'Usuario registrado correctamente' });
  } catch (err) {
    console.error('Error en registro:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};


const loginUser = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    const user = await User.findOne({ email });

    if (
      !user ||
      user.password !== password ||
      !user.roles.includes(role) // <- esto verifica si el rol solicitado está dentro del array
    ) {
      return res.status(401).json({ message: 'Credenciales inválidas o rol incorrecto' });
    }

    res.status(200).json({ message: 'Login exitoso', user });
  } catch (err) {
    console.error('Error en login:', err);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

module.exports = { registerUser, loginUser };
