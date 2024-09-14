const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

// Configura la conexión a la base de datos MariaDB
const db = mysql.createConnection({
  host: 'localhost',       // Asegúrate de que esté configurado según tu entorno
  user: 'root',            // Cambia por el usuario que usas en tu base de datos
  password: '1234', // Cambia por tu contraseña
  database: 'asistencia_universitaria', // Cambia por el nombre de tu base de datos
  port: 3308               // Si configuraste el puerto en 3308 en HeidiSQL
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error conectando a la base de datos:', err);
  } else {
    console.log('Conectado a la base de datos correctamente');
  }
});

// Middleware para manejo de JSON
app.use(express.json());

// Importa rutas de usuarios
const userRoutes = require('./routes/users'); // Asegúrate de que el archivo users.js exista en routes
app.use('/users', userRoutes); // Usar las rutas de usuarios

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
