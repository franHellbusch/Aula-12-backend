import { Router } from "express";
import { users } from "../db/users.js";

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  res.status(200).json(users);
});

usersRouter.post("/", (req, res) => {
  const nuevoUser = req.body;

  // validacion para nombre de usuario repetido
  const userNameValidation = users.some((user) => user.name == nuevoUser.name);

  if (userNameValidation) {
    return res.status(400).send("Nombre de usuario repetido");
  }

  const userLastNameValidation = users.some((user) => user.lastName == nuevoUser.lastName);
  if (userLastNameValidation) {
    return res.status(400).send("Apellido de usuario repetido");
  }

  users.push(nuevoUser);
  res.status(200).json(nuevoUser);
});

export default usersRouter;
