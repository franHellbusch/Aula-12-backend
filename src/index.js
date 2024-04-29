import express from "express";
import productsRouter from "./api/routes/products.routes.js";
import usersRouter from "./api/routes/users.routes.js";

// Instancia de una app de express
const app = express();

// configurar peticiones con json
app.use(express.json());

// configuracion de rutas
app.use("/products", productsRouter); // products
app.use("/users", usersRouter); // users

// Puerto
const PORT = 8080;

// Servidor en escucha
app.listen(PORT, () => {
  console.info(`Servidor escuchando en http://localhost:${PORT}`);
});
