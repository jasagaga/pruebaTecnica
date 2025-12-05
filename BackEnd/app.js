const express = require('express');
const app = express();
require('dotenv').config();

// Importar rutas
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
