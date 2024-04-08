// API REST
// Utiliza peticiones http (GET, POST, PUT, DELETE)
// Operaciones CRUD (Create, Read, Update, Delete)
// En general se utiliza para transferir informacion el JSON o XML

// index.js: Levantar el servidor y realizar configuraciones principales

// Express: framework de node.js

// importacion de express
import express from "express";

// crear nuestra app de express
const app = express();

// localhost (IP: 127.0.0.1)
// http://localhost:<puerto>

// puerto (direccion numerica a la cual se le asigna un proceso)
const PORT = 8080;

// levantando servidor
app.listen(PORT, () => {
  console.info(`Servidor escuchando en http://localhost:${PORT}`);
});
