const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const User = require("./models/user"); // Asegúrate de tener este archivo creado

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("Servidor backend funcionando");
});

// Ruta de registro
app.post("/api/register", async (req, res) => {
  try {
    const { role, nombre, email, password, licencia, vehiculo } = req.body;

    if (!role || !nombre || !email || !password) {
      return res.status(400).json({ message: "Faltan campos obligatorios" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(409).json({ message: "El correo ya está registrado" });
    }

    const nuevoUsuario = new User({
      role,
      nombre,
      email,
      password, // RECOMENDACIÓN: usar bcrypt para hashear
      licencia: role === "conductor" ? licencia : undefined,
      vehiculo: role === "conductor" ? vehiculo : undefined,
    });

    await nuevoUsuario.save();

    res.status(201).json({ message: "Usuario registrado correctamente" });
  } catch (error) {
    console.error("Error en /api/register:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Conectado a MongoDB Atlas");
})
.catch(err => {
  console.error("❌ Error al conectar a MongoDB Atlas:", err.message);
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
