import { Router } from "express";
import { products } from "../db/products.js";

// creando nuestro enrutador
const productsRouter = Router();

// Obtener todos los productos
productsRouter.get("/", (req, res) => {
  const { limit } = req.query;
  // JSON
  res.status(200).json(products);
});

// Obtener un producto por id
productsRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  const productFinded = products.find((prod) => prod.id == id);
  res.status(200).json(productFinded);
});

// Crear un nuevo producto
productsRouter.post("/", (req, res) => {
  const nuevoProduct = req.body;
  let productIdValidation = products.some((prod) => prod.id == nuevoProduct.id);

  // se valida el id y si esta repetido se lanza un error al cliente
  if (productIdValidation) {
    return res.status(400).send("El id del producto esta repetido");
  }

  products.push(nuevoProduct);
  res.status(200).json(nuevoProduct);
});

// Actualizar un producto
productsRouter.put("/", (req, res) => {
  res.send("Actualizacion de un producto");
});

// Eliminar un producto
productsRouter.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Se elimino el elemento ${id}`);
});

export default productsRouter;
