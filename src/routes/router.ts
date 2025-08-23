import {Router, Request, Response} from "express";
import { createPet, deletePet, getAllPets, getPetById, updatePet } from "../controllers/petController";
import { validate } from "../middlewares/handleValidation";
import { petBodyValidation } from "../middlewares/petMiddleware";
import { login } from "../controllers/userController";
import { authMiddleware } from "../middlewares/authMiddleware";
import { enviaContato } from "../controllers/contatoController";
import { contatoValidation } from "../middlewares/contatoMiddleware";



const router = Router();


export default router
    .post("/pet", authMiddleware, petBodyValidation(), validate, createPet)
    .get("/pet", getAllPets)
    .get("/pet/:id", getPetById)
    .delete("/pet/:id", authMiddleware, deletePet)
    .patch("/pet/:id", authMiddleware, petBodyValidation(), validate, updatePet)
    
    .post("/login", login)
    .post("/contato", contatoValidation(), validate, enviaContato)
    // .post("/register", register);