import {Router, Request, Response} from "express";
import { createPet, deletePet, getAllPets, getPetById } from "../controllers/petController";
import { validate } from "../middlewares/handleValidation";
import { petBodyValidation } from "../middlewares/petMiddleware";



const router = Router();


export default router
    .get("/test", (req: Request, res: Response) => {
    res.status(200).send("API funcionando")
    })
    .post("/pet", petBodyValidation(), validate, createPet)
    .get("/pet", getAllPets)
    .get("/pet/:id", getPetById)
    .delete("/pet/:id", deletePet);