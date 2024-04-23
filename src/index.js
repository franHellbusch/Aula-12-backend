import express from "express";
import { products } from "./api/db/products.js";

// Instancia de una app de express
const app = express();

// Rutas: endpoints (URLs)
// req: request, res: response
// Metodo GET
app.get("/products", (req, res) => {
  const { limit } = req.query;
  // JSON
  res.status(200).json(products);
});

// parametro obligatorios
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const productFinded = products.find((prod) => prod.id == id);
  res.status(200).json(productFinded);
});

// Metodo POST
app.post("/products", (req, res) => {
  res.send("Se creo un producto");
});

// Metodo PUT
app.put("/products", (req, res) => {
  res.send("Actualizacion de un producto");
});

// Metodo DELETE
app.delete("/products/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Se elimino el elemento ${id}`);
});

// Puerto
const PORT = 8080;

// Servidor en escucha
app.listen(PORT, () => {
  console.info(`Servidor escuchando en http://localhost:${PORT}`);
});
